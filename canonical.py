import os

# Define the base URL
base_url = "https://docs.kuberocketci.io/docs/"

# List of directories to process
directories_to_process = [
    "developer-guide",
    "faq",
    "operator-guide",
    "quick-start",
    "use-cases",
    "user-guide"
]

# Function to generate the canonical link
def generate_canonical_link(file_path, base_directory, sub_directory):
    relative_path = os.path.relpath(file_path, base_directory)
    file_name = os.path.splitext(relative_path)[0]
    canonical_link = f'<head>\n  <link rel="canonical" href="{base_url}{sub_directory}/{file_name}/" />\n</head>'
    return canonical_link

# Function to scan the directory and update files
def scan_and_update(directory, sub_directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    content = f.readlines()

                # Check if the canonical link already exists
                if not any('<link rel="canonical"' in line for line in content):
                    canonical_link = generate_canonical_link(file_path, directory, sub_directory)
                    # Insert the canonical link on the third line
                    content.insert(2, canonical_link + "\n\n")
                    with open(file_path, 'w') as f:
                        f.writelines(content)
                    print(f"Updated {file_path}")

# Root directory of all docs
root_directory = "/Users/Sergiy_Kulanov/my_projects/edp/docs/versioned_docs/version-3.9"

# Process each specified directory
for sub_directory in directories_to_process:
    full_path = os.path.join(root_directory, sub_directory)
    scan_and_update(full_path, sub_directory)
