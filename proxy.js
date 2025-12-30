
 
function openIP() {
      const ip = document.getElementById("ipInput").value.trim();
      if (!ip) {
        alert("Please enter a valid IP address.");
        return;
      }

      // Basic validation
      const ipRegex = /^(?:\d{1,3}\.){3}\d{1,3}$/;
      if (!ipRegex.test(ip)) {
        alert("Invalid IP address format.");
        return;
      }

      // Open the IP in a new window (assumes http)
      const url = `http://${ip}`;
      window.open(url, "_blank");
}
  