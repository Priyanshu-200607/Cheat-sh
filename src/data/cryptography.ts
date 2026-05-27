import { Category } from './types';

export const cryptoData: Category = {
  id: 'cryptography',
  title: 'Cryptography',
  icon: '🔐',
  color: '#e91e63',
  gradient: 'linear-gradient(135deg, #e91e63, #880e4f)',
  description: 'Symmetric, asymmetric encryption, hashing, TLS, and common algorithms',
  sections: [
    {
      id: 'basics',
      title: 'Core Concepts',
      snippets: [
        { code: `# Cryptography fundamentals
# Plaintext  → [Encryption] → Ciphertext
# Ciphertext → [Decryption] → Plaintext

# Types:
# 1. Symmetric     — same key to encrypt & decrypt
# 2. Asymmetric    — public key encrypts, private decrypts
# 3. Hash Function — one-way, fixed output size

# Key concepts
# Key       — secret used in encryption/decryption
# IV/Nonce  — random value to ensure unique ciphertext
# Salt      — random value added to password before hashing
# MAC       — Message Authentication Code (integrity)
# Signature — asymmetric MAC (non-repudiation)

# Security properties
# Confidentiality — only intended recipient reads data
# Integrity       — data not altered in transit
# Authentication  — verify identity of sender
# Non-repudiation — sender can't deny sending`, description: 'Cryptography fundamentals and security goals', language: 'python' },
      ]
    },
    {
      id: 'symmetric',
      title: 'Symmetric Encryption',
      snippets: [
        { code: `# Symmetric Encryption — same key both sides
# Fast, suitable for large data

# AES (Advanced Encryption Standard) — GOLD STANDARD
# Key sizes: 128, 192, 256 bits
# Block size: 128 bits always
# Modes:
#   ECB — same input → same output (INSECURE, don't use)
#   CBC — chains blocks with XOR + IV (secure, but sequential)
#   CTR — turns block cipher into stream cipher (parallelizable)
#   GCM — CTR + authentication (AEAD, recommended)

from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

key = AESGCM.generate_key(bit_length=256)
aesgcm = AESGCM(key)
nonce = os.urandom(12)          # 96-bit nonce for GCM

ciphertext = aesgcm.encrypt(nonce, b"hello world", None)
plaintext  = aesgcm.decrypt(nonce, ciphertext, None)

# DES — 56-bit key, BROKEN (brute-forceable)
# 3DES — 112/168-bit, slow, deprecated
# ChaCha20-Poly1305 — modern alternative to AES-GCM
#   Faster in software (no AES-NI), used in TLS 1.3`, description: 'AES modes, symmetric encryption in Python', language: 'python' },
        { code: `# Key Distribution Problem
# How do two parties share the same key securely?
# Solution: use asymmetric key exchange first

# Diffie-Hellman Key Exchange
# 1. Agree on public prime p and base g
# 2. Alice picks secret a, sends A = g^a mod p
# 3. Bob picks secret b, sends B = g^b mod p
# 4. Shared secret: A^b mod p == B^a mod p
#    = g^(a*b) mod p (never transmitted!)

# ECDH (Elliptic Curve Diffie-Hellman) — modern DH
# Same concept on elliptic curves
# Much shorter keys for same security level
# 256-bit ECDH ≈ 3072-bit DH

# Perfect Forward Secrecy (PFS)
# Generate new ephemeral key for each session
# Compromise of long-term key can't decrypt old traffic`, description: 'Diffie-Hellman key exchange and PFS', language: 'python' },
      ]
    },
    {
      id: 'asymmetric',
      title: 'Asymmetric Encryption',
      snippets: [
        { code: `# RSA (Rivest–Shamir–Adleman)
# Based on difficulty of factoring large numbers
# Public key: (n, e)    Private key: (n, d)
# Encrypt: C = M^e mod n
# Decrypt: M = C^d mod n

from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

# Generate key pair
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048   # min 2048, prefer 4096
)
public_key = private_key.public_key()

# Encrypt (with OAEP padding — required)
ciphertext = public_key.encrypt(
    b"secret message",
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)

# Decrypt
plaintext = private_key.decrypt(ciphertext, padding.OAEP(...))

# RSA key sizes:
# 1024-bit — BROKEN
# 2048-bit — minimum today
# 4096-bit — recommended for long-term security`, description: 'RSA encryption with proper OAEP padding', language: 'python' },
        { code: `# Digital Signatures
# Sign with PRIVATE key → verify with PUBLIC key
# Proves authenticity + integrity

from cryptography.hazmat.primitives.asymmetric import ec

# ECDSA — Elliptic Curve Digital Signature Algorithm
private_key = ec.generate_private_key(ec.SECP256R1())
public_key = private_key.public_key()

# Sign
signature = private_key.sign(
    b"message to sign",
    ec.ECDSA(hashes.SHA256())
)

# Verify
public_key.verify(signature, b"message to sign", ec.ECDSA(hashes.SHA256()))
# Raises exception if invalid!

# Ed25519 — modern, fast, deterministic (recommended)
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
private_key = Ed25519PrivateKey.generate()
signature = private_key.sign(b"message")
private_key.public_key().verify(signature, b"message")

# Comparison: RSA-PKCS1 < RSA-PSS < ECDSA < Ed25519`, description: 'Digital signatures with ECDSA and Ed25519', language: 'python' },
      ]
    },
    {
      id: 'hashing',
      title: 'Cryptographic Hashing',
      snippets: [
        { code: `# Hash function properties
# 1. Deterministic  — same input → same output
# 2. One-way        — can't reverse hash to input
# 3. Avalanche      — tiny input change → huge output change
# 4. Collision-free — hard to find two inputs with same hash

import hashlib

# SHA-2 family (secure)
hashlib.sha256(b"hello").hexdigest()
hashlib.sha512(b"hello").hexdigest()

# SHA-3 (Keccak, newer standard)
hashlib.sha3_256(b"hello").hexdigest()

# BLAKE2 (fast, secure, modern)
hashlib.blake2b(b"hello", digest_size=32).hexdigest()

# MD5, SHA-1 — BROKEN for security (collision attacks found)
# Still used for checksums/non-security purposes

# Hash comparison
# SHA-256 output: 256 bits = 32 bytes = 64 hex chars
# SHA-512 output: 512 bits = 64 bytes = 128 hex chars`, description: 'Hash functions, SHA family, properties', language: 'python' },
        { code: `# Password Hashing — CRITICAL SECURITY
# NEVER store plain passwords or use raw SHA/MD5

# bcrypt — built-in work factor (adjustable cost)
import bcrypt
password = b"mypassword"
salt = bcrypt.gensalt(rounds=12)  # cost factor
hashed = bcrypt.hashpw(password, salt)
bcrypt.checkpw(password, hashed)  # True

# Argon2 — winner of PHC, modern best practice
from argon2 import PasswordHasher
ph = PasswordHasher(time_cost=2, memory_cost=65536, parallelism=2)
hashed = ph.hash("mypassword")
ph.verify(hashed, "mypassword")  # True

# scrypt — memory-hard (built into hashlib)
import hashlib
dk = hashlib.scrypt(
    b"password", salt=b"salt",
    n=16384, r=8, p=1
)

# Key stretching prevents brute-force:
# bcrypt/Argon2/scrypt → attacker can try few k/sec
# Raw SHA256 → attacker can try billions/sec`, description: 'Password hashing: bcrypt, Argon2, scrypt', language: 'python' },
        { code: `# HMAC — Hash-based Message Authentication Code
# Provides both integrity AND authenticity
# HMAC(key, message) = Hash(key XOR opad || Hash(key XOR ipad || message))

import hmac, hashlib

key = b"secret-key"
message = b"important data"
mac = hmac.new(key, message, hashlib.sha256).hexdigest()

# Verify (timing-safe comparison)
hmac.compare_digest(mac, expected_mac)  # prevents timing attacks

# Uses: API request signing, JWT signatures, CSRF tokens
# Never: compare HMACs with == (timing attack vulnerability)`, description: 'HMAC for message authentication', language: 'python' },
      ]
    },
    {
      id: 'tls',
      title: 'TLS/SSL & PKI',
      snippets: [
        { code: `# TLS (Transport Layer Security) — replaces SSL
# Provides: Confidentiality + Integrity + Authentication

# TLS 1.3 Handshake (simplified)
# 1. Client Hello   → supported ciphers, key share
# 2. Server Hello   → chosen cipher, key share, certificate
# 3. Key Exchange   → both derive same session keys (ECDH)
# 4. Finished       → verify handshake integrity
# Data flows encrypted from step 3

# TLS 1.2 vs 1.3
# 1.2: 2 round trips, RSA key exchange (no PFS by default)
# 1.3: 1 round trip, mandatory ECDHE (PFS always)
#      removed: RSA key exchange, RC4, DES, 3DES, SHA-1

# Cipher Suites (TLS 1.3)
# TLS_AES_256_GCM_SHA384
# TLS_CHACHA20_POLY1305_SHA256
# TLS_AES_128_GCM_SHA256

# Certificate verification chain
# Browser → Leaf Cert → Intermediate CA → Root CA
# Root CAs are pre-installed and trusted by OS/browser
# Certificate contains: domain, public key, expiry, signature

# X.509 certificate fields
# Subject    — who the cert is for (CN=example.com)
# Issuer     — who signed it (Let's Encrypt, DigiCert)
# Valid from/to — validity period
# Public key — server's public key
# SANs       — Subject Alternative Names (multi-domain)
# Signature  — CA's digital signature`, description: 'TLS handshake, cipher suites, certificates', language: 'python' },
      ]
    },
    {
      id: 'common-attacks',
      title: 'Common Attacks & Defenses',
      snippets: [
        { code: `# Common Cryptographic Attacks

# 1. Brute Force
#    Try all possible keys
#    Defense: long keys (AES-256), password stretching

# 2. Dictionary / Rainbow Table Attack
#    Pre-computed hash tables
#    Defense: use salt in password hashing

# 3. Timing Attack
#    Measure time differences to extract secrets
#    Defense: constant-time comparison (hmac.compare_digest)

# 4. Padding Oracle Attack
#    Exploit CBC padding errors to decrypt
#    Defense: use AEAD (AES-GCM) not CBC

# 5. Man-in-the-Middle (MITM)
#    Intercept and modify traffic
#    Defense: TLS with certificate pinning

# 6. Birthday Attack
#    Find collision in O(√n) operations
#    Defense: use 256-bit hashes (collision in 2^128 ops)

# 7. Length Extension Attack
#    Forge HMAC with SHA-1/SHA-2
#    Defense: use HMAC properly, or SHA-3/BLAKE2

# 8. Replay Attack
#    Resend captured valid message
#    Defense: nonces, timestamps, sequence numbers`, description: 'Common attacks and their defenses', language: 'python' },
        { code: `# Best Practices Summary
# ✅ Use AES-256-GCM or ChaCha20-Poly1305 for symmetric
# ✅ Use RSA-4096 or ECDSA (P-256) for asymmetric
# ✅ Use SHA-256+ for hashing (never MD5/SHA-1 for security)
# ✅ Use Argon2id for passwords (or bcrypt/scrypt)
# ✅ Always use HMAC for message authentication
# ✅ Use TLS 1.3 for transport security
# ✅ Always use random IVs/nonces (never reuse!)
# ✅ Use constant-time comparisons for secrets
# ✅ Never roll your own crypto
# ✅ Use well-audited libraries (cryptography, libsodium)

# Key sizes guide:
# Symmetric: 128-bit minimum, 256-bit recommended
# RSA: 2048-bit minimum, 4096-bit recommended
# ECC: 256-bit (P-256) minimum
# Hash: SHA-256 minimum, SHA-512 for high security
# Password: Argon2id (t=3, m=65536, p=4)`, description: 'Cryptography best practices summary', language: 'python' },
      ]
    },
  ]
};
