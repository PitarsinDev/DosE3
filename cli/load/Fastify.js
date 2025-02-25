import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";
function Fastify(name) {
    const gitFastify = `git clone --depth 1 https://github.com/JKTheRipperTH/fastify-dose3-Template.git ${name}`;
    runCommand(gitFastify);
    Logo();
    end(name);
}
export default Fastify;
