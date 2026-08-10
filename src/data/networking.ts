import { Category } from './types';

export const networkingData: Category = {
  id: 'networking',
  title: 'Networking',
  icon: '🌐',
  color: '#00a8cc',
  gradient: 'linear-gradient(135deg, #00a8cc, #005c8a)',
  description: 'OSI Model, TCP/IP, Protocols, Routing, Sockets',
  sections: [
    {
      id: 'networking-theoretical-concepts',
      title: 'Theoretical Concepts & Algorithms',
      description: 'Core concepts and algorithms in Computer Networking',
      snippets: [
        { code: `# 1. OSI vs TCP/IP Model
# OSI (7 Layers): Physical, Data Link, Network, Transport, Session, Presentation, Application.
# TCP/IP (4 Layers): Network Access, Internet, Transport, Application.

# 2. Key Protocols by Layer (OSI)
# - Application: HTTP, FTP, SMTP, DNS, DHCP
# - Transport: TCP (Reliable, connection-oriented), UDP (Fast, connectionless)
# - Network: IP, ICMP, OSPF, BGP, ARP
# - Data Link: Ethernet, Wi-Fi, MAC addresses

# 3. Routing Algorithms (Network Layer)
# - Distance Vector (e.g., RIP): Uses Bellman-Ford. Nodes share entire routing table with neighbors. Suffers from count-to-infinity.
# - Link State (e.g., OSPF): Uses Dijkstra's. Nodes share info about their links with everyone. Faster convergence.
# - Path Vector (e.g., BGP): Used for inter-domain routing on the Internet.

# 4. Congestion Control (TCP)
# - Slow Start: Exponential increase of congestion window.
# - Congestion Avoidance: Linear increase.
# - Fast Retransmit / Fast Recovery: Triggered by duplicate ACKs.`, description: 'OSI Model, Protocols, Routing, TCP Congestion Control', language: 'python' }
      ]
    },
    {
      id: 'networking-core-questions',
      title: 'Core Technical Questions',
      description: 'Fundamental Networking interview questions',
      snippets: [
        { code: `Q1: Explain the TCP 3-way handshake.
A1: Used to establish a reliable connection.
1. SYN: Client sends a SYN (Synchronize) packet to server with initial sequence number.
2. SYN-ACK: Server receives SYN, replies with a SYN-ACK (Synchronize-Acknowledge) packet.
3. ACK: Client receives SYN-ACK, sends an ACK (Acknowledge) packet back. Connection is established.

Q2: What happens when you type a URL in a browser?
A2:
1. DNS Resolution: Browser checks cache, then OS cache, then DNS resolver to get IP address.
2. TCP Connection: Browser initiates 3-way handshake with the server's IP on port 80/443.
3. TLS Handshake: If HTTPS, negotiates encryption.
4. HTTP Request: Browser sends GET request.
5. Server Response: Server processes request and returns HTTP response (e.g., 200 OK) with HTML content.
6. Browser Rendering: Browser parses HTML, fetches additional assets (CSS, JS, images), and renders page.

Q3: Difference between TCP and UDP?
A3:
- TCP: Connection-oriented, reliable, guarantees delivery and order, has flow & congestion control, slower. (Use: Web, Email, File transfer).
- UDP: Connectionless, unreliable, no guarantee of delivery or order, no congestion control, fast. (Use: Video streaming, Gaming, VoIP).`, description: 'TCP Handshake, Browser Request Flow, TCP vs UDP', language: 'markdown' }
      ]
    }
  ]
};
