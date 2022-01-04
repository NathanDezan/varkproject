import pandas as pd
import preprocessing
import user

df_names = preprocessing.nameProcessing()
df_emails = preprocessing.emailProcessing()
df_test = pd.DataFrame(columns=['ID', 'Nomes', 'E-mail', 'Respostas'])
df_test['ID'] = list(range(1, 12))
df_test.set_index('ID')

df_test['Nomes'] = df_names['Nomes']
df_test['E-mail'] = df_emails['E-mail']

preprocessing.responsesProcessing()