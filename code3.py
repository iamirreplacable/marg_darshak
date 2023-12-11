import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
# from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from google.colab import files

# Upload and read the dataset
file = files.upload()
career = pd.read_csv('dataset9000.data', header=None)

# Extract features (X) and target labels (y)
X = np.array(career.iloc[:, 0:17])  # X is skills
y = np.array(career.iloc[:, 17])    # Y is Roles

# Set column names for clarity
career.columns = ["Database Fundamentals", "Computer Architecture", "Distributed Computing Systems",
                   "Cyber Security", "Networking", "Development", "Programming Skills", "Project Management",
                   "Computer Forensics Fundamentals", "Technical Communication", "AI ML", "Software Engineering",
                   "Business Analysis", "Communication skills", "Data Science", "Troubleshooting skills",
                   "Graphics Designing", "Roles"]

# Drop rows with missing values
career.dropna(how='all', inplace=True)

# Encode categorical labels if needed
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Perform feature selection using SelectKBest with k=5 (or adjust k as needed)
selector = SelectKBest(score_func=f_classif, k=13)
X_train_selected = selector.fit_transform(X_train, y_train)
X_test_selected = selector.transform(X_test)

# Initialize classifiers
rf_classifier = RandomForestClassifier(n_estimators=80, random_state=42)
svm_classifier = SVC(kernel='linear', probability=True)
knn_classifier = KNeighborsClassifier(n_neighbors=2304)
sgd_classifier = SGDClassifier(loss='log_loss', max_iter=450, random_state=42)

# Create a VotingClassifier to combine classifiers
ensemble_classifier = VotingClassifier(estimators=[
    ('rf', rf_classifier),
    ('svm', svm_classifier),
    ('knn', knn_classifier),
    ('sgd', sgd_classifier)
], voting='soft')

# Train the VotingClassifier with selected features
ensemble_classifier.fit(X_train_selected, y_train)

# Make predictions
predictions = ensemble_classifier.predict(X_test_selected)
confusion = confusion_matrix(y_test, predictions)
print("Confusion Matrix:")
print(confusion)
# Evaluate the model
accuracy = accuracy_score(y_test, predictions)
print(f"Ensemble Classifier Accuracy with Feature Selection: {accuracy}")
y_pred = ensemble_classifier.predict(X_test_selected )

print(classification_report(y_test, y_pred))
