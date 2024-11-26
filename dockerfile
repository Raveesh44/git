FROM python:3.9-alpine
WORKDIR /app
COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt
COPY . .
CMD ["python","app.py"]
