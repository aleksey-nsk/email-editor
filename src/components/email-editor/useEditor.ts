import {applyStyle, TStyle} from "./apply-style";
import {useRef, useState} from "react";

export function useEditor() {
    const [text, setText] = useState(`Enter email...`)
    const [selectionStart, setSelectionStart] = useState(0)
    const [selectionEnd, setSelectionEnd] = useState(0)

    const textRef = useRef<HTMLTextAreaElement | null>(null)

    const updateSelection = () => {
        if (!textRef.current) {
            return
        }
        setSelectionStart(textRef.current?.selectionStart);
        setSelectionEnd(textRef.current?.selectionEnd);
    }

    const applyFormat = (type: TStyle) => {
        // if (!textRef.current) {
        //     return
        // }
        //
        // const cursorStart = textRef.current?.selectionStart
        // const cursorEnd = textRef.current?.selectionEnd

        const selectedText = text.substring(selectionStart, selectionEnd); // выделенный текст
        if (!selectedText) {
            return
        }

        const before = text.substring(0, selectionStart); // текст до выделенного фрагмента
        const after = text.substring(selectionEnd); // текст после выделенного фрагмента

        setText(before + applyStyle(type, selectedText) + after);
    }

    return {text, setText, textRef, applyFormat, updateSelection}
}
