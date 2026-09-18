//js doesnt support abstraction. it supports by using private method that are not allowed to call
//doesnt support multiple inheritance 
//It support overriding-(runtime)
//it doesnt support method overloading(comple time polymorphisum)

//**** ABSTRACTION ****

class EmailService {
  sendEmail(to, msg) {
    this.#connect();
    this.#authenticate();
    this.#send(msg);
  console.log(`Email Sent to ${to}`);
  }
  #connect() {
    console.log("connecttting...");
  }
  #authenticate() {
    console.log("Authenticatting...");
  }
  #send(msg) {
    console.log("sendint ",msg);
  }
}
const eservice = new EmailService();
eservice.sendEmail("daminikarankal@gmail.com","Hellooo")
