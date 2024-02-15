function matchInput(target: string, input: string): boolean {
    const inputMatchTarget = new RegExp('[' + input.toUpperCase() + input.toLowerCase() + ']');
    return inputMatchTarget.test(target);
}