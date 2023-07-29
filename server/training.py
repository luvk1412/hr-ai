from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings


def load_documents_and_get_text_splits():
    loader = DirectoryLoader("trainingdocs/")
    documents = loader.load()
    print(f'Documents count: {len(documents)}')
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=512, chunk_overlap=10)
    texts = text_splitter.split_documents(documents)
    print(f'split counts: {len(texts)}')
    return texts


def main():
    texts = load_documents_and_get_text_splits()
    persist_directory = "./db"
    print('Loading embeding model')
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

    print('Indexing data')
    vectordb = Chroma.from_documents(documents=texts,
                                     embedding=embeddings,
                                     persist_directory=persist_directory)
    print('Persisting data')
    vectordb.persist()


if __name__ == '__main__':
    main()
