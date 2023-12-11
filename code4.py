# Import necessary libraries
import pandas as pd
import pickle
import numpy as np

from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import VotingClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import SGDClassifier
from sklearn.tree import DecisionTreeClassifier

# Load your dataset (replace 'your_dataset.csv' with the actual file path)
# Make sure you've uploaded the CSV file to Google Colab
from google.colab import files
file = files.upload()
career = pd.read_csv('dataset9000.data', header=None)

X = np.array(career.iloc[:, 0:17])  # X is skills
y = np.array(career.iloc[:, 17])  # Y is Roles

# Attribute to return the column labels of the given DataFrame
career.columns = ["Database Fundamentals", "Computer Architecture", "Distributed Computing Systems",
                  "Cyber Security", "Networking", "Development", "Programming Skills", "Project Management",
                  "Computer Forensics Fundamentals", "Technical Communication", "AI ML", "Software Engineering",
                  "Business Analysis", "Communication skills", "Data Science", "Troubleshooting skills",
                  "Graphics Designing", "Roles"]

career.dropna(how='all', inplace=True)

label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)

# train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)
noise_level = 0.5
random_indices = np.random.choice(len(y_train), size=int(len(y_train) * noise_level), replace=False)
y_train[random_indices] = np.random.randint(0, len(label_encoder.classes_), size=len(random_indices))

# Initialize the classifiers
svm_classifier = SVC(kernel='linear', probability=True)
knn_classifier = KNeighborsClassifier(n_neighbors=4965)
sgd_classifier = SGDClassifier(loss='log', max_iter=500, random_state=42)
decision_tree_classifier = DecisionTreeClassifier(max_depth=11, random_state=42)

# Create the VotingClassifier
voting_classifier = VotingClassifier(estimators=[
    ('svm', svm_classifier),
    ('knn', knn_classifier),
    ('sgd', sgd_classifier),
    ('decision_tree', decision_tree_classifier)
], voting='soft')  # 'soft' for probability-based voting

# Train the ensemble model
voting_classifier.fit(X_train, y_train)
predictions = voting_classifier.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Ensemble Model Accuracy: {accuracy}")

# Compute the confusion matrix
confusion = confusion_matrix(y_test, predictions)
print("Confusion Matrix:")
print(confusion)

# Print classification report
classification_rep = classification_report(y_test, predictions)
print("Classification Report:")
print(classification_rep)
