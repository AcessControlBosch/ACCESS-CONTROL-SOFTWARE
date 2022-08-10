export default {

    SET_USER(context, payload){
        console.log("vuex:" + payload);
        context.commit("USER", payload);
    },

    setipmachine(context, payload){
        console.log("IP_Adress_MACHINE:" + payload);
        context.commit("IPMACHINE", payload);
    },

    setidmachine(context, payload){
        console.log("IDMACHINE:" + payload);
        context.commit("IDMACHINE", payload);
    },
    
}