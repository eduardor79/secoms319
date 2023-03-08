from paramiko import SSHClient, AutoAddPolicy
import json

client = SSHClient()
client.load_system_host_keys()
client.set_missing_host_key_policy(AutoAddPolicy())
client.connect('192.168.1.13', username='pi', password='raspberry')

# insert command for running script
stdin, stdout, stderr = client.exec_command('python3 DHT11.py')


print(f'STDOUT: {stdout.read().decode("utf8")}')
print(f'STDERR: {stderr.read().decode("utf8")}')
with open('data.json', 'w') as f:
    json.dump(stderr.read().decode("utf8"), f)

# close everything
stdin.close()
stdout.close()
stderr.close()
client.close()
