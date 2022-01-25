import pandas as pd

def nameProcessing():
    load_names = pd.read_csv("..\\names.csv", header=None)
    names = {'ID': list(range(1, 12)), 'Nomes': load_names[0]}
    df_names = pd.DataFrame(names)
    df_names = df_names.set_index('ID')
    # print(df_names)

    return df_names

def emailProcessing():
    load_emails = pd.read_csv("..\\email.csv", header=None)
    emails = {'ID': list(range(1, 12)), 'E-mail': load_emails[0]}
    df_emails = pd.DataFrame(emails)
    df_emails = df_emails.set_index('ID')

    return df_emails

def responsesProcessing():
    load_responses = pd.read_csv("..\\mapVark.csv", header=None)
    results = {'ID': list(range(1, 17))}
    df_results  = pd.DataFrame(results)
    df_results = df_results.set_index('ID')
    df_responses = pd.DataFrame(load_responses)
    itens_n = list()
    count = 0
    response_n_id = list()
    responses = list()

    for i in list(range(0, 11)):
        for j in df_responses.iloc[i]:
            itens_n.append(j)
            count += 1
            if count == 4:
                response_n_id.append(itens_n.copy())
                count = 0
                itens_n.clear()
        responses.append(response_n_id.copy())
        response_n_id.clear()
        
    dd = dict()
    dd['Results'] = responses
    #print(dd['Results'][0])
    df_results[1] = dd['Results'][0]
    df_results[2] = dd['Results'][1]
    df_results[3] = dd['Results'][2]
    df_results[4] = dd['Results'][3]
    df_results[5] = dd['Results'][4]
    df_results[6] = dd['Results'][5]
    df_results[7] = dd['Results'][6]
    df_results[8] = dd['Results'][7]
    df_results[9] = dd['Results'][8]
    df_results[10] = dd['Results'][9]
    df_results[11] = dd['Results'][10]

    return df_results

def vark_values(input_data):
    load_vark = pd.read_csv("..\\vark.csv", header=None)
    results_1 = {'id': 1, 'v': 5, 'a': 4, 'r': 3, 'k': 3}
    results_2 = {'id': 2, 'v': 2, 'a': 7, 'r': 4, 'k': 6}
    results_3 = {'id': 3, 'v': 11, 'a': 10, 'r': 10, 'k': 9}
    results_4 = {'id': 4, 'v': 2, 'a': 7, 'r': 6, 'k': 5}
    results_5 = {'id': 5, 'v': 5, 'a': 4, 'r': 3, 'k': 6}
    results_6 = {'id': 6, 'v': 5, 'a': 8, 'r': 0, 'k': 5}
    results_7 = {'id': 7, 'v': 6, 'a': 10, 'r': 2, 'k': 5}
    results_8 = {'id': 8, 'v': 6, 'a': 6, 'r': 5, 'k': 5}
    results_9 = {'id': 9, 'v': 6, 'a': 3, 'r': 2, 'k': 5}
    results_10 = {'id': 10, 'v': 6, 'a': 10, 'r': 5, 'k': 9}
    results_11 = {'id': 11, 'v': 1, 'a': 5, 'r': 4, 'k': 5}
    vark_results = [results_1, results_2, results_3, results_4, results_5, results_6, results_7, results_8, results_9, results_10, results_11]

    results_vark = ['v', 'a', 'v a r', 'a', 'k', 'a', 'a', 'v a', 'v', 'a', 'a k']

    return vark_results, results_vark


#   var position = writeData.getLastRow();
#   var mapVarkOccurrence = [];

#   for(var i = 0; i < 64; i++){
#     mapVarkOccurrence.push(writeData.getRange(position, i+1).getValue().toString());
#   }
#   for(var j = 0; j < mapVarkOccurrence.length; j++){
#     if(mapVarkOccurrence[j] == 1){
#       if(mapVarkLetter[j] == "V"){
#         v++;
#       }else if(mapVarkLetter[j] == "A"){
#         a++;
#       }else if(mapVarkLetter[j] == "R"){
#         r++;
#       }else if(mapVarkLetter[j] == "K"){
#         k++;
#       }
#     }
#   }
#   Logger.log(v + " | " + a + " | " + r + " | " + k);