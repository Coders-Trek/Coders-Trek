
def mail_sender_function(receiver_email , message):
    #!/usr/bin/python
    print(receiver_email , message , 'xxxxxxxxxx')
    import smtplib
    import os
    from decouple import config

    email = config("EMAIL")
    password = config("PASSWORD")

    server = smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login(config("EMAIL") , config("PASSWORD"))
    server.sendmail(config("EMAIL"),receiver_email, message)

def OTP_generator():
    # for nuemeric OTP
    import math
    import random
    corpus= "0123456789"
    generate_OTP = ""
    size = 6 # length of generated OTP
    length = len(corpus)
    for i in range(size) :
        generate_OTP += corpus[math.floor(random.random() * length)] 
    print("Generated OTP is :" , generate_OTP)
    return str(generate_OTP)


def mock_data_generator():
    import random
    dic = {}
    dic['Projects'] = random.randint(1,10)
    dic['Tasks'] = random.randint(15,30)
    dic['Notifications'] = random.randint(40 , 50)
    labels = [ random.randint(8 , 15)  for i in range(4)]
    data  = [ random.randint(1 , 9)  for i in range(4)]
    dic['CompletionTasks'] = {'labels' : labels , 'data' : data}
    data = [random.randint(25,100) for i in range(3)]
    dic['TaskPerformance'] = { 'labels' : ['Assigned' , 'Completed' , 'Active' ] , 'data' : data}
    labels = ['UserA' , 'UserB' , 'UserC' , 'UserD' , 'UserE']
    data =[random.randint(1 , 6) for i in range(len(labels))]
    dic['Leaderboard'] = {'labels' : labels , 'data' : data}
    dic['ActiveProjects'] = {'Hackerrank Python problems 1' : 78 , 'Hackerrank Python problems 2' : 90 , 'Hackerrank Python problems 3' : 34}
    dic['OngoingTasks'] = ['5 hackerrank probs[projectA]' , '7 hackerearth probs[project]' , '8 hackerearth probs[project C]']
    return dic

# dic = mock_data_generator()
# for key in dic.keys():
#     print(key)
#     print(dic[key])
#     print()
#     print('---------')
#     print()

