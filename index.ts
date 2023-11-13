function add(number:number , number2:number) {
    return number + number2;
}

const num : number = 5
const num2 : number = 10

const sum : number = add(num, num2)

const server = Bun.serve({
    port: process.env.PORT || 3000,
    fetch(req: Request): Response | Promise<Response> {
      const url = new URL(req.url)

      if (url.pathname === '/') {
        return new Response(`The sum of two numbers is: ${sum}`);
      };
      if (url.pathname === '/about') {
        return new Response(`About Me`);
      };

      return new Response(`404!`)
    },
  
  });

console.log(`Listening on PORT ${server.port} at URL http://localhost:${server.port}`)