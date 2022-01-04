class User:
    
    def __init__(self, name, email, responses):
        self.name = name
        self.email = email
        self.responses = responses

    def infoName(self):
        print(self.name)
    
    def infoEmail(self):
        print(self.email)

    def infoResponses(self):
        print(self.responses)