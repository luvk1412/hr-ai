from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from dotenv import load_dotenv
import os


load_dotenv()
os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")

persist_directory = "./db"
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
retriever = db.as_retriever(search_kwargs={"k": 5})

llm = ChatOpenAI(model_name='gpt-3.5-turbo')

qa = RetrievalQA.from_chain_type(
    llm=llm, chain_type="stuff", retriever=retriever)


def get_hr_query_ans(query):
    query = f"###Prompt {query}"

    llm_response = qa(query)
    return llm_response["result"]
