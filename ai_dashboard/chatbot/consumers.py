import json
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        query = text_data_json['query']
        response = process_query(query)  # Your chatbot processing logic
        self.send(text_data=json.dumps({'response': response}))
