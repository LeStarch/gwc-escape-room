# Autogen header
import os

if __name__ == "__main__":
    with open(os.path.join(os.path.dirname(__file__), "index.html"), "r") as file_handle:
        data = file_handle.read()
        data = data.replace("\"", "\\\"").replace("\n", "\\n")
    final = "const char* index_data = \"{data}\";".format(data=data)
    with open(os.path.join(os.path.dirname(__file__), "index.hpp"), "w") as file_handle:
        file_handle.write(final)
