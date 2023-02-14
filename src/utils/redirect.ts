export function redirectTo(path: string, e: MouseEvent){
    e.preventDefault();
    window.location.href = path;
}