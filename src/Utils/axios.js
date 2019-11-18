

class axios {
    static async get(url) {        
        // random duration from 1 - 5 seconds
        const duration = (Math.random() * 4000) + 1000;
        await new Promise(resolve => setTimeout(resolve, duration));
    }
}

export default axios;