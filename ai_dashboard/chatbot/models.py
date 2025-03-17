from django.db import models

class Area(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Question(models.Model):
    area = models.ForeignKey(Area, related_name="questions", on_delete=models.CASCADE)
    question_text = models.TextField()

    def __str__(self):
        return self.question_text

class QuestionAnswerLog(models.Model):
    question_text = models.TextField()  # User's question
    answer_text = models.TextField()    # Chatbot's answer
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp for the interaction

    def __str__(self):
        return f"Q: {self.question_text[:50]} | A: {self.answer_text[:50]}"

class Feedback(models.Model):
    feedback = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.feedback[:50]
        
class Question(models.Model):
    area = models.ForeignKey(Area, related_name="questions", on_delete=models.CASCADE)
    question_text = models.TextField()
    answer_text = models.TextField(null=True, blank=True)  # New field for answers

    def __str__(self):
        return self.question_text
