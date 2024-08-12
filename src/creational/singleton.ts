class Singleton {
    private static instance: Singleton;

    // Static method to get the single instance of the class
    public static getInstance(): Singleton {
        if ( !Singleton.instance ) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Example method
    public showMessage(): void {
        console.log("Hello from Singleton");
    }
}