import os
import re

def resolve_conflicts(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if '<<<<<<< Updated upstream' in content and '>>>>>>> Stashed changes' in content:
                    print(f"Resolving conflicts in {file_path}")
                    # Keep the second part (Stashed changes)
                    # Pattern: <<<<<<< Updated upstream\n(part1)\n=======\n(part2)\n>>>>>>> Stashed changes
                    new_content = re.sub(
                        r'<<<<<<< Updated upstream.*?======= (.*?)\s*>>>>>>> Stashed changes', 
                        r'\1', 
                        content, 
                        flags=re.DOTALL
                    )
                    # wait, re.sub might be tricky with multiple conflicts.
                    
                    # Safer way:
                    lines = content.splitlines()
                    new_lines = []
                    in_first_part = False
                    in_second_part = False
                    
                    for line in lines:
                        if line.startswith('<<<<<<< Updated upstream'):
                            in_first_part = True
                            continue
                        if line.startswith('======='):
                            in_first_part = False
                            in_second_part = True
                            continue
                        if line.startswith('>>>>>>> Stashed changes'):
                            in_second_part = False
                            continue
                        
                        if not in_first_part:
                            new_lines.append(line)
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(new_lines) + '\n')
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    resolve_conflicts('/Users/mukul/VSCode/Vincenzo-HK-Website-Prod')
