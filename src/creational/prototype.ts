class Car  {
    private model: string;
    private color: string;

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }

    public clone(): Car {
        // Create a new instance by copying the current instance
        return new Car(this.model, this.color);
    }

    public display(): void {
        console.log(`Car model: ${this.model}, color: ${this.color}`);
    }
}