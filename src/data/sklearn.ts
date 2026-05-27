import { Category } from './types';

export const sklearnData: Category = {
  id: 'sklearn',
  title: 'Scikit-Learn',
  icon: '🤖',
  color: '#f7931e',
  gradient: 'linear-gradient(135deg, #f7931e, #3a86ff)',
  description: 'Machine learning in Python — classification, regression, clustering, pipelines & model evaluation',
  sections: [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Import sklearn and basic setup',
      snippets: [
        { code: `import sklearn\nprint(sklearn.__version__)`, description: 'Check installed version', language: 'python' },
        { code: `from sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)`, description: 'Load a built-in toy dataset', language: 'python' },
        { code: `from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)`, description: 'Split data into training and test sets (80/20)', language: 'python' },
      ],
    },
    {
      id: 'preprocessing',
      title: 'Preprocessing',
      description: 'Scale, encode and transform features',
      snippets: [
        { code: `from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(X_train)\nX_test_s  = scaler.transform(X_test)`, description: 'Standardise features (zero mean, unit variance)', language: 'python' },
        { code: `from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()          # scales to [0, 1]\nX_scaled = scaler.fit_transform(X)`, description: 'Min-Max normalisation', language: 'python' },
        { code: `from sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\ny_enc = le.fit_transform(y)      # 'cat','dog' → 0,1`, description: 'Encode string labels to integers', language: 'python' },
        { code: `from sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder(sparse_output=False)\nX_ohe = ohe.fit_transform(X_cat)`, description: 'One-hot encode categorical columns', language: 'python' },
        { code: `from sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')   # or 'median','most_frequent'\nX_imp = imp.fit_transform(X)`, description: 'Fill missing values (NaN) with column mean', language: 'python' },
        { code: `from sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2, include_bias=False)\nX_poly = poly.fit_transform(X)`, description: 'Generate polynomial interaction features', language: 'python' },
      ],
    },
    {
      id: 'classification',
      title: 'Classification',
      description: 'Supervised learning for discrete labels',
      snippets: [
        { code: `from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression(max_iter=1000)\nclf.fit(X_train, y_train)\ny_pred = clf.predict(X_test)`, description: 'Logistic Regression classifier', language: 'python' },
        { code: `from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier(n_estimators=100, random_state=42)\nclf.fit(X_train, y_train)`, description: 'Random Forest — robust, handles non-linear boundaries', language: 'python' },
        { code: `from sklearn.svm import SVC\nclf = SVC(kernel='rbf', C=1.0, probability=True)\nclf.fit(X_train, y_train)`, description: 'Support Vector Machine with RBF kernel', language: 'python' },
        { code: `from sklearn.neighbors import KNeighborsClassifier\nclf = KNeighborsClassifier(n_neighbors=5)\nclf.fit(X_train, y_train)`, description: 'K-Nearest Neighbours classifier', language: 'python' },
        { code: `from sklearn.tree import DecisionTreeClassifier\nclf = DecisionTreeClassifier(max_depth=4, random_state=42)\nclf.fit(X_train, y_train)`, description: 'Decision Tree — interpretable, prone to overfitting', language: 'python' },
        { code: `from sklearn.ensemble import GradientBoostingClassifier\nclf = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1)\nclf.fit(X_train, y_train)`, description: 'Gradient Boosted Trees classifier', language: 'python' },
        { code: `from sklearn.naive_bayes import GaussianNB\nclf = GaussianNB()\nclf.fit(X_train, y_train)`, description: 'Naive Bayes for continuous features', language: 'python' },
      ],
    },
    {
      id: 'regression',
      title: 'Regression',
      description: 'Supervised learning for continuous targets',
      snippets: [
        { code: `from sklearn.linear_model import LinearRegression\nreg = LinearRegression()\nreg.fit(X_train, y_train)\nprint(reg.coef_, reg.intercept_)`, description: 'Ordinary Least Squares linear regression', language: 'python' },
        { code: `from sklearn.linear_model import Ridge\nreg = Ridge(alpha=1.0)   # L2 regularisation\nreg.fit(X_train, y_train)`, description: 'Ridge regression — reduces large coefficients', language: 'python' },
        { code: `from sklearn.linear_model import Lasso\nreg = Lasso(alpha=0.1)   # L1 regularisation → sparse coefficients\nreg.fit(X_train, y_train)`, description: 'Lasso regression — drives irrelevant features to zero', language: 'python' },
        { code: `from sklearn.ensemble import RandomForestRegressor\nreg = RandomForestRegressor(n_estimators=100, random_state=42)\nreg.fit(X_train, y_train)`, description: 'Random Forest for regression tasks', language: 'python' },
        { code: `from sklearn.svm import SVR\nreg = SVR(kernel='rbf', C=100, epsilon=0.1)\nreg.fit(X_train, y_train)`, description: 'Support Vector Regression', language: 'python' },
      ],
    },
    {
      id: 'clustering',
      title: 'Clustering (Unsupervised)',
      description: 'Group unlabelled data into clusters',
      snippets: [
        { code: `from sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, random_state=42, n_init='auto')\nkm.fit(X)\nlabels = km.labels_\ncenters = km.cluster_centers_`, description: 'K-Means — partition data into k clusters', language: 'python' },
        { code: `from sklearn.cluster import DBSCAN\ndb = DBSCAN(eps=0.5, min_samples=5)\ndb.fit(X)\nlabels = db.labels_   # -1 means noise`, description: 'DBSCAN — density-based, finds arbitrary-shape clusters', language: 'python' },
        { code: `from sklearn.cluster import AgglomerativeClustering\nac = AgglomerativeClustering(n_clusters=3, linkage='ward')\nlabels = ac.fit_predict(X)`, description: 'Hierarchical agglomerative clustering', language: 'python' },
      ],
    },
    {
      id: 'dimensionality-reduction',
      title: 'Dimensionality Reduction',
      snippets: [
        { code: `from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_2d = pca.fit_transform(X)\nprint(pca.explained_variance_ratio_)`, description: 'PCA — project to 2D, inspect explained variance', language: 'python' },
        { code: `from sklearn.manifold import TSNE\nX_tsne = TSNE(n_components=2, random_state=42, perplexity=30).fit_transform(X)`, description: 't-SNE — visualise high-dimensional data in 2D', language: 'python' },
        { code: `from sklearn.decomposition import TruncatedSVD\nsvd = TruncatedSVD(n_components=50)\nX_reduced = svd.fit_transform(X_sparse)   # works on sparse matrices`, description: 'Truncated SVD — like PCA but for sparse data (e.g. TF-IDF)', language: 'python' },
      ],
    },
    {
      id: 'model-evaluation',
      title: 'Model Evaluation',
      description: 'Metrics and cross-validation',
      snippets: [
        { code: `from sklearn.metrics import accuracy_score, classification_report\nprint(accuracy_score(y_test, y_pred))\nprint(classification_report(y_test, y_pred))`, description: 'Classification accuracy + precision/recall/F1 report', language: 'python' },
        { code: `from sklearn.metrics import confusion_matrix\ncm = confusion_matrix(y_test, y_pred)`, description: 'Confusion matrix — rows=actual, cols=predicted', language: 'python' },
        { code: `from sklearn.metrics import roc_auc_score\nauc = roc_auc_score(y_test, clf.predict_proba(X_test)[:, 1])`, description: 'ROC-AUC score for binary classification', language: 'python' },
        { code: `from sklearn.metrics import mean_squared_error, r2_score\nmse = mean_squared_error(y_test, y_pred)\nr2  = r2_score(y_test, y_pred)`, description: 'Regression metrics: MSE and R² score', language: 'python' },
        { code: `from sklearn.model_selection import cross_val_score\nscores = cross_val_score(clf, X, y, cv=5, scoring='accuracy')\nprint(scores.mean(), scores.std())`, description: '5-fold cross-validation — more reliable than single split', language: 'python' },
      ],
    },
    {
      id: 'pipelines',
      title: 'Pipelines',
      description: 'Chain transformers and estimators cleanly',
      snippets: [
        { code: `from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf',    SVC(kernel='rbf')),\n])\npipe.fit(X_train, y_train)\nprint(pipe.score(X_test, y_test))`, description: 'Build a scaler → classifier pipeline', language: 'python' },
        { code: `from sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\npreprocessor = ColumnTransformer([\n    ('num', StandardScaler(),   num_cols),\n    ('cat', OneHotEncoder(),    cat_cols),\n])\npipe = Pipeline([('prep', preprocessor), ('clf', clf)])\npipe.fit(X_train, y_train)`, description: 'Mixed numeric + categorical preprocessing pipeline', language: 'python' },
        { code: `from sklearn.model_selection import GridSearchCV\n\nparam_grid = {'clf__C': [0.1, 1, 10], 'clf__kernel': ['linear', 'rbf']}\ngrid = GridSearchCV(pipe, param_grid, cv=5, scoring='accuracy')\ngrid.fit(X_train, y_train)\nprint(grid.best_params_, grid.best_score_)`, description: 'Grid search hyperparameter tuning on a pipeline', language: 'python' },
      ],
    },
    {
      id: 'feature-selection',
      title: 'Feature Selection',
      snippets: [
        { code: `from sklearn.feature_selection import SelectKBest, f_classif\nselector = SelectKBest(f_classif, k=10)\nX_new = selector.fit_transform(X, y)`, description: 'Select top-k features by ANOVA F-score', language: 'python' },
        { code: `from sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\nrfe = RFE(estimator=LogisticRegression(), n_features_to_select=5)\nrfe.fit(X, y)\nprint(rfe.support_)   # True for selected features`, description: 'Recursive Feature Elimination', language: 'python' },
        { code: `importances = clf.feature_importances_   # RandomForest / GBT\nindices = importances.argsort()[::-1]`, description: 'Get feature importances from tree-based models', language: 'python' },
      ],
    },
    {
      id: 'saving-loading',
      title: 'Saving & Loading Models',
      snippets: [
        { code: `import joblib\n\njoblib.dump(clf, 'model.pkl')      # save\nclf = joblib.load('model.pkl')     # load`, description: 'Persist a trained model to disk with joblib', language: 'python' },
        { code: `import pickle\n\nwith open('model.pkl', 'wb') as f:\n    pickle.dump(clf, f)\n\nwith open('model.pkl', 'rb') as f:\n    clf = pickle.load(f)`, description: 'Persist a model using Python\'s built-in pickle', language: 'python' },
      ],
    },
  ],
};
