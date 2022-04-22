type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

type AnyButtonType = FormButton | DialogButtonType;

type ConfirmationHandlingFormButton = {
    onConfirm: (DialogButtonType: DialogButtonType) => void | null
};