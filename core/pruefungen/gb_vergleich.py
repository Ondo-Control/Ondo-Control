import pandas as pd, numpy as np
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import log_loss
d=pd.read_csv('rows.csv'); tr=d[d.rolle=='lernen']; te=d[d.rolle=='pruefen']
X=[c for c in d.columns if c not in('y','rolle')]
print('y Werte',sorted(d.y.unique()))
base=['lnH','lnD','lnA']
def ll(m,cols): m.fit(tr[cols],tr.y); return log_loss(te.y,m.predict_proba(te[cols]),labels=sorted(d.y.unique()))
print('K6-Basis (3 Zahlen), logistisch:',round(ll(LogisticRegression(max_iter=2000),base),4))
print('alle Merkmale, logistisch      :',round(ll(LogisticRegression(max_iter=3000),X),4))
for lr,it in [(0.05,300),(0.03,600)]:
    print('alle Merkmale, Gradient Boosting lr',lr,'it',it,':',round(ll(HistGradientBoostingClassifier(learning_rate=lr,max_iter=it,max_leaf_nodes=15,l2_regularization=1.0,early_stopping=True,random_state=0),X),4))
