interface IComputer {
    CPU: string;
    RAM: string;
    storage: string;
    GPU: string;
    motherboard: string;
    setStorage(storage:string): void;
    setRam(ram:string): void;
    setGPU(gpu:string): void;
    setCPU(cpu:string): void;
    setMotherboard(motherboard:string): void;
    

}
class Computer implements IComputer {
    CPU: string;
    RAM: string;
    storage: string;
    GPU: string;
    motherboard: string;
    setStorage(storage:string){
        this.storage = storage;
    };
    setRam(ram:string){
        this.RAM = ram;
    };
    setMotherboard(motherboard:string){
        this.motherboard = motherboard;
    };
    setGPU(gpu:string){
        this.GPU = gpu;
    };
    setCPU(cpu:string){
        this.CPU = cpu;
    };
}

interface IComputerBuilder {
    createNewComputer(): IComputerBuilder;
    buildCPU(): IComputerBuilder;
    buildRAM(): IComputerBuilder;
    buildStorage(): IComputerBuilder;
    buildGPU(): IComputerBuilder;
    buildMotherboard(): IComputerBuilder;
    getComputer(): Computer;
}

class GamingComputerBuilder implements IComputerBuilder {
    computer: IComputer;
    createNewComputer(){
        this.computer = new Computer();
        return this;
    }
    public buildCPU(){
        this.computer.setCPU("High-end CPU");
        return this;
    }

    public buildRAM(){
        this.computer.setRam("32GB");
        return this;
    }

    public buildStorage(){
        this.computer.setStorage("1TB SSD");
        return this;
    }

    public buildGPU(){
        this.computer.setGPU("High-end GPU");
        return this;
    }

    public buildMotherboard() {
        this.computer.setMotherboard("Gaming motherboard");
        return this;
    }

    public getComputer(): Computer {
        return this.computer;
    }
}

class ComputerDirector {
    private builder: IComputerBuilder;
    
    public setBuilder( builder: IComputerBuilder ): void {
        this.builder = builder;
    };
    
    public buildComputer(){
        return this.builder.createNewComputer()
        .buildCPU()
        .buildRAM()
        .buildStorage()
        .buildGPU()
        .buildMotherboard()
        .getComputer();
    }
}