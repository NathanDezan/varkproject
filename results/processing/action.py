import pandas as pd
import preprocessing
import user
import numpy as np
import matplotlib.pyplot as plt

df_names = preprocessing.nameProcessing()
df_emails = preprocessing.emailProcessing()
df_results = preprocessing.responsesProcessing()
list_vark, result_vark = preprocessing.vark_values(df_results)

df_test = pd.DataFrame(columns=['ID', 'Names', 'E-mail', 'v-a-r-k', 'Learning'])
df_test['ID'] = list(range(1, 12))
df_test = df_test.set_index('ID')

#Resultados coletados
df_test['Names'] = df_names['Nomes']
df_test['E-mail'] = df_emails['E-mail']
df_test['v-a-r-k'] = list_vark
df_test['Learning'] = result_vark

print(df_test)
#print(df_results)

#Insights gerados a partir dos dados

# #Quantidade de pessoas por aprendizagem
# fig = plt.figure()
# ax = fig.add_axes([0,0,1,1])
# vark = ['v', 'a', 'r', 'k']
# vark_qtd = [4, 8, 1, 2]
# ax.bar(vark, vark_qtd)
# plt.show()