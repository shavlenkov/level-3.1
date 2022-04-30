type DialogButtonType = "Yes" | "No";
 
interface FormButton {
    type: "Add" | "Remove" | "Buy"
}
 
type AnyButtonType = FormButton | DialogButtonType;
 
type ConfirmationHandlingFormButton = {
    onConfirm: (DialogButtonType: DialogButtonType) => void | null
};
 
 
interface Obj {
    id?: string
}
 
class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}
 
 
function func<T>(a: Obj | Record<string, T>, x: (el:AnyButtonType) => Record<string, T>) {
   // сигнатура функции
}
 
function наштамповать<T>(SOMECLASS:{ new(): T; }, count:number)  {
    let a = []
    for (let i = 0; i < count; i++)
       a.push(new SOMECLASS());
   
    return a;
}
 
let a: Rectangle[] = наштамповать(Rectangle, 10);
let b: Circle[] = наштамповать(Circle, 20)
