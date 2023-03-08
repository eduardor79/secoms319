from paramiko import SSHClient
import json

client = SSHClient()
client.load_system_host_keys()
client.connect('example.com', username='user', password='secret')

# insert command for running script
stdin, stdout, stderr = client.exec_command('here')


print(f'STDOUT: {stdout.read().decode("utf8")}')
print(f'STDERR: {stderr.read().decode("utf8")}')
with open('data.json', 'w') as f:
    json.dump(stderr.read().decode("utf8"), f)

# close everything
stdin.close()
stdout.close()
stderr.close()
client.close()
