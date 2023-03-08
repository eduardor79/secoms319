from paramiko import SSHClient, AutoAddPolicy
import json
import time

client = SSHClient()
client.load_system_host_keys()
client.set_missing_host_key_policy(AutoAddPolicy())
client.connect('192.168.1.13', username='pi', password='raspberry')


# insert command for running script
while (1):
    stdin, stdout, stderr = client.exec_command("python3 DHT11.py")
    stdin, stdout, stderr = client.exec_command("cat data.json")
    print(stdout.read().decode())
    with open('data.json', 'w') as f:
        json.dump(stdout.read().decode(), f)
    time.sleep(2)

# close everything
stdin.close()
stdout.close()
stderr.close()
client.close()
