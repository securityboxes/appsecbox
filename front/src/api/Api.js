class Api {

    static async request( method, uri, data){
        return fetch( uri, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })
    }

    static async getStats(){
        let statsStub = {applicationsCount:100}
        return JSON.stringify(statsStub)
    }


    static async getApplications(){
        return this.request("GET", "/api/application").then( (response) => {return response.json()} )
    }
    static async getDatasets(){
        return this.request("GET", "/api/dataset").then( (response) => {return response.json()} )
    }
    static async getComponents(applicationId){
        return this.request("GET", "/api/application/"+applicationId+"/component").then( (response) => {return response.json()} )
    }
    static async getControls(){
        return this.request("GET", "/api/dictionary/control/type").then( (response) => {return response.json()} )
    }
    static async getDatasetCategories(){
        return this.request("GET", "/api/dictionary/dataset/category").then( (response) => {return response.json()} )
    }

    static async getApplicationById( id ){
        return this.request("GET", "/api/application/"+id).then( (response) => {return response.json()} )
    }
    static async getUseCaseById( applicationId, useCaseId ){
        return this.request("GET", "/api/application/"+applicationId+"/use-case/"+useCaseId).then( (response) => {return response.json()} )
    }
    static async getComponentById( applicationId, componentId ){
        return this.request("GET", "/api/application/"+applicationId+"/component/"+componentId).then( (response) => {return response.json()} )
    }

    static async createApplication(name){
        return this.request("POST", "/api/application", name)
    }
    static async createDataset(name,source,categories){
        let request = {name:name, source:source, categories:categories}
        return this.request("POST", "/api/dataset", JSON.stringify(request))
    }
    static async createComponent(applicationId, name){
        return this.request("POST", "/api/application/"+applicationId+"/component", name)
    }
    static async createTechnicalComponent(applicationId,componentId, uri, type){
        let request = {uri:uri, type:type}
        return this.request("POST", "/api/application/"+applicationId+"/component/"+componentId+"/technical-component", JSON.stringify(request))
    }
    static async createMetaForApplication(applicationId, key, value){
        let request = {key:key, value:value}
        return this.request("POST", "/api/application/"+applicationId+"/meta", JSON.stringify(request))
    }
    static async createMetaForComponent(applicationId,componentId, key, value){
        let request = {key:key, value:value}
        return this.request("POST", "/api/application/"+applicationId+"/component/"+componentId+"/meta", JSON.stringify(request))
    }
    static async createMetaForTechnicalComponent(applicationId,componentId,technicalComponentId, key, value){
        let request = {key:key, value:value}
        return this.request("POST", "/api/application/"+applicationId+"/component/"+componentId+"/technical-component/"+technicalComponentId, JSON.stringify(request))
    }

    static async createUseCase(applicationId,name,actor,action,componentsIds){
        let request = {name:name, actor:actor, action:action, componentsIds:componentsIds}
        return this.request("POST", "/api/application/"+applicationId+"/use-case", JSON.stringify(request))
    }

    static async linkDatasetsToComponent(applicationId,componentId,datasetsIds){
        let request = {datasetsIds:datasetsIds}
        return this.request("PUT", "/api/application/"+applicationId+"/component/"+componentId+"/dataset", JSON.stringify(request))
    }


}

export default Api;