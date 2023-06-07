from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.svm import SVC
import pandas as pd
import pickle
import numpy as np
from google.colab import files
from sklearn.metrics import classification_report
file = files.upload()
career = pd.read_csv('dataset9000.data', header=None)


X = np.array(career.iloc[:, 0:17])  # X is skills
print(X)
y = np.array(career.iloc[:, 17])  # Y is Roles
print(y)

# attribute to return the column labels of the given Dataframe
career.columns = ["Database Fundamentals", "Computer Architecture", "Distributed Computing Systems",
                  "Cyber Security", "Networking", "Development", "Programming Skills", "Project Management",
                  "Computer Forensics Fundamentals", "Technical Communication", "AI ML", "Software Engineering", "Business Analysis",
                  "Communication skills", "Data Science", "Troubleshooting skills", "Graphics Designing", "Roles"]

career.dropna(how='all', inplace=True)

career.head()

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.80, random_state=524)

classifier = SVC(kernel='rbf')
scores = {}


classifier.fit(X_train, y_train)
print('X_train', X_train)
print('y_train', y_train)
y_pred = classifier.predict(X_test)
print('y_pred', y_pred)
scores[5] = metrics.accuracy_score(y_test, y_pred)
print('Accuracy=', scores[5]*100)
print(classification_report(y_test, y_pred))
