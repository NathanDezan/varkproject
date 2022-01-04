import pandas as pd

def nameProcessing():
    load_names = pd.read_csv("..\\names.csv", header=None)
    names = {'ID': list(range(1, 12)), 'Nomes': load_names[0]}
    df_names = pd.DataFrame(names)
    df_names.set_index('ID', inplace=True)
    # print(df_names)

    return df_names

def responsesProcessing():
    load_responses = pd.read_csv("..\\mapVark.csv", header=None)
    df_responses = pd.DataFrame(load_responses)
    itens_n = list()
    count = 0
    response_n_id = list()
    responses = list()

    for i in list(range(0, 11)):
        for j in df_responses.iloc[i]:
            print(j)
            itens_n.append(j)
            count += 1
            if count == 4:
                response_n_id.append(itens_n.copy())
                count = 0
                itens_n.clear()
        responses.append(response_n_id.copy())
        response_n_id.clear()
        
    #     questions.append(df_responses.iloc[i])
    #     count += 1
    #     if count == 4:
    #         response_n_id.append(questions.copy())
    #         questions.clear()
    #         count = 0
    # responses.append(response_n_id.copy())

    # print(responses)

            
# load_csv = pd.read_csv("..\\mapVark.csv", header=None)
# df = pd.DataFrame(load_csv)

# count = 0
# questions = list()
# response_n_id = list()
# responses = list()

# for i in df.iloc[1]:
#     count += 1
#     questions.append(i)
#     if count == 4:
#         response_n_id.append(questions.copy())
#         questions.clear()
#         count = 0

# responses.append(response_n_id.copy())

# #print(responses[0])

# # #Pre-processing dataframe
# # df.set_index()
# # print(df)
# # print(df.iloc[0])
# # response_1 = convertResponse(df.iloc[0])

# # for i in response_1:
# #     print(i)

def emailProcessing():
    load_emails = pd.read_csv("..\\email.csv", header=None)
    emails = {'ID': list(range(1, 12)), 'E-mail': load_emails[0]}
    df_emails = pd.DataFrame(emails)
    df_emails.set_index('ID', inplace=True)

    return df_emails