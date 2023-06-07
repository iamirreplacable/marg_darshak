from sklearn.model_selection import train_test_split
from sklearn import metrics
import pandas as pd
import pickle
import numpy as np
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import classification_report
from google.colab import files
file = files.upload()
career = pd.read_csv('dataset9000.data', header=None)
# np.dtype('float64')

X = np.array(career.iloc[:, 0:17])  # X is skills
print(X)
y = np.array(career.iloc[:, 17])  # Y is Roles
print("hi")
print(y)
# class_names=career.target_names
# attribute to return the column labels of the given Dataframe
career.columns = ["Database Fundamentals", "Computer Architecture", "Distributed Computing Systems",
                  "Cyber Security", "Networking", "Development", "Programming Skills", "Project Management",
                  "Computer Forensics Fundamentals", "Technical Communication", "AI ML", "Software Engineering", "Business Analysis",
                  "Communication skills", "Data Science", "Troubleshooting skills", "Graphics Designing", "Roles"]

career.dropna(how='all', inplace=True)
# print("career.dropna(how ='all', inplace = True)",career.dropna(how ='all', inplace = True))
career.head()
# splitting the data into training and test sets

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=524)
sgdc = SGDClassifier(max_iter=6, tol=0.12)
sgdc.fit(X_train, y_train)
y_pred = sgdc.predict(X_test)
score = sgdc.score(X_train, y_train)
scores = {}
print(classification_report(y_test, y_pred))


scores[5] = metrics.accuracy_score(y_test, y_pred)
print('Accuracy=', scores[5]*100)
