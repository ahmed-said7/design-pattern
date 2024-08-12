interface IButton {
    render(): void;
};
interface ICheckbox {
    render(): void;
};

class WindowsButton implements IButton {
    render(): void {
        console.log("Windows Button");
    }
};

class WindowsCheckbox implements ICheckbox {
    render(): void {
        console.log("Windows Checkbox");
    }
};

class MacOsButton implements IButton {
    render(): void {
        console.log("MacOs Button");
    }
};

class MacOsCheckbox implements ICheckbox {
    render(): void {
        console.log("MacOs Checkbox");
    }
};

interface IFactory {
    createButton(): IButton ;
    createCheckbox(): ICheckbox ;
};

class WindowsFactory implements IFactory {
    createButton(): IButton {
        return new WindowsButton();
    };
    createCheckbox(): ICheckbox {
        return new WindowsCheckbox();
    };
};

class MacOsFactory implements IFactory {
    createButton(): IButton {
        return new MacOsButton();
    };
    createCheckbox(): ICheckbox {
        return new MacOsCheckbox();
    };
};

class Application {
    private button:IButton;
    private checkbox:ICheckbox;
    constructor ( factory:IFactory ){
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    };
    render(){
      this.checkbox.render();
      this.button.render();
    };
};
