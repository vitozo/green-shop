import {createServer, Factory, Model} from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            flower: Model,
        },
        factories: {
            flower: Factory.extend({
                title(i) {
                    return `Bird\'s Nest Fern ${i}`
                },
                price() {
                    let min = 100
                    let max = 200

                    const price = Math.floor(Math.random() * (max - min + 1)) + min
                    return `${price}$`
                },
            }),
        },

        seeds(server) {
            server.createList("flower", 10)
        },

        routes() {
            this.namespace = "api"

            this.get("/flowers")
        },
    })

    return server
}