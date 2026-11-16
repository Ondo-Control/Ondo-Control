# Kontrolle der Modellklasse: Kuenstliche Spiele mit NICHTLINEARER Regel (Wechselwirkung/XOR).
# Frage: Wuerde der Gradient-Boosting-Vergleich auf echten Daten eine Wechselwirkung ueberhaupt finden?
import numpy as np
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import log_loss
rng=np.random.default_rng(20261116); n=60000
X=rng.normal(size=(n,11)); a,b=X[:,0],X[:,1]
s=1.4*np.sign(a)*np.sign(b)          # beide einzeln ohne Wirkung, zusammen eine klare Regel
lg=np.stack([np.log(.45)+s,np.full(n,np.log(.27)),np.log(.28)-s],1); p=np.exp(lg); p/=p.sum(1,keepdims=True)
y=np.array([rng.choice(3,p=q) for q in p]); tr=slice(0,40000); te=slice(40000,n)
opt=log_loss(y[te],p[te])
lin=LogisticRegression(max_iter=3000).fit(X[tr],y[tr]); gb=HistGradientBoostingClassifier(learning_rate=0.05,max_iter=300,max_leaf_nodes=15,l2_regularization=1.0,early_stopping=True,random_state=0).fit(X[tr],y[tr])
print('Optimum (Regel bekannt):',round(opt,4))
print('linear (wie der Core)  :',round(log_loss(y[te],lin.predict_proba(X[te])),4))
print('Gradient Boosting      :',round(log_loss(y[te],gb.predict_proba(X[te])),4))
