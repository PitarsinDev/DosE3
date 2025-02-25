import net from "net";
function checkPort(port) {
    return new Promise((resolve) => {
        const client = net.connect(port, "localhost", () => {
            // Port is open and a connection was established
            client.end();
            resolve(port);
        });
        client.on("error", () => {
            // Port is not open
            resolve(null);
        });
    });
}
async function checkPorts(startPort, endPort, onComplete) {
    for (let port = startPort; port <= endPort; port++) {
        const result = await checkPort(port);
        if (result !== null) {
            console.log(`  --> Port ${result} is open.`);
        }
    }
    ;
    onComplete();
}
export function scan() {
    checkPorts(1, 65535, () => {
        console.log("Scan finished!");
    });
}
