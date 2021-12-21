import {createServer, Factory, Model} from "miragejs"

import Barberton_Daisy from "../images/products/Barberton Daisy.jpg"
import Angel_Wing_Begonia from "../images/products/Angel Wing Begonia.jpg"
import African_Violet from "../images/products/African Violet.jpg"
import Beach_Spider_Lily from "../images/products/Beach Spider Lily.jpg"
import Blushing_Bromeliad from "../images/products/Blushing Bromeliad.jpg"
import Aluminum_Plant from "../images/products/Aluminum Plant.jpg"
import Birds_Nest_Fern from "../images/products/Bird's Nest Fern.jpg"
import Broadleaf_Lady_Palm from "../images/products/Broadleaf Lady Palm.jpg"
import Chinese_Evergreen from "../images/products/Chinese Evergreen.jpg"

export function makeServer({environment = "test"} = {}) {
    return createServer({
        environment,

        models: {
            flower: Model,
        },
        factories: {
            flower: Factory.extend({
                price() {
                    let min = 100
                    let max = 200

                    const price = Math.floor(Math.random() * (max - min + 1)) + min
                    return `${price}$`
                },
            }),
        },

        seeds(server) {
            server.create('flower', {title: "Barberton Daisy", photo: Barberton_Daisy});
            server.create('flower', {title: "Angel Wing Begonia", photo: Angel_Wing_Begonia});
            server.create('flower', {title: "African Violet", photo: African_Violet});
            server.create('flower', {title: "Beach Spider Lily", photo: Beach_Spider_Lily});
            server.create('flower', {title: "Blushing Bromeliad", photo: Blushing_Bromeliad});
            server.create('flower', {title: "Aluminum Plant", photo: Aluminum_Plant});
            server.create('flower', {title: "Bird's Nest Fern", photo: Birds_Nest_Fern});
            server.create('flower', {title: "Broadleaf Lady Palm", photo: Broadleaf_Lady_Palm});
            server.create('flower', {title: "Chinese Evergreen", photo: Chinese_Evergreen});
        },

        routes() {
            this.namespace = "api"

            this.get("/flowers")
        },
    })
}