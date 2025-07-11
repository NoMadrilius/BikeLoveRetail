import { useEffect, useRef, useState } from "react";
import Quill, { Delta } from "quill";
import 'quill/dist/quill.snow.css';
import { ArticleAPI } from "@/api/ArticleAPI";
import QuillResizeImage from 'quill-resize-image';
import { observer } from "mobx-react";

const Font : any = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace', 'arial', 'comic-sans', 'courier-new', 'georgia', 'times-new-roman'];
Quill.register(Font, true);
Quill.register('modules/resizeImage', QuillResizeImage);

const BaseImage = Quill.import('formats/image');

// @ts-ignore
export class CustomImage extends BaseImage {
  static create(value: any) {
    const node = super.create(value.src || value);
    if (typeof value === 'object') {
      if (value.style) node.setAttribute('style', value.style);
    }
    return node;
  }

  static value(node: HTMLElement) {
    return {
      src: node.getAttribute('src'),
      style: node.getAttribute('style'),
    };
  }
}

Quill.register('formats/image', CustomImage, true);

const ArticleEditor = ({data, setData}:{data:Delta | null,setData:(v:Delta)=>void}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  let q:Quill|null = null

  useEffect(() => {
    if (editorRef.current && q === null) {
      q  = new Quill(editorRef.current, {
        theme: 'snow', placeholder:"Пишіть тут...",
        modules: {
          toolbar: [
            [{ font: Font.whitelist }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ 'header': 1 },{ 'header': 2 }],
            ['bold', 'italic', 'underline','strike'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image','video','formula', 'code-block','blockquote'],
            [{ 'direction': 'rtl' }],
            ['clean'],
          ],
          resizeImage: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: ['Resize', 'DisplaySize']
          }
        },
      });

      q.on('text-change', () => {
        const images = editorRef.current?.querySelectorAll('img');
        images?.forEach((img) => {
          if (img.hasAttribute('style')){
            const blot = Quill.find(img) as any;
            if (blot) blot.format("style", img.getAttribute('style'))
          }
        });

        setData(q!.getContents())
      });

      // @ts-ignore
      q.getModule('toolbar').addHandler('image', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = async () => {
          if (input.files && input.files[0]) {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('imageFile', file);
            const res = (await ArticleAPI.LoadImage(formData))
            if (res.data) {
              const range = q!.getSelection();
              q!.insertEmbed(range?.index || 0, 'image', res.data);
            }
          }
        };
        input.click();
      });
    }
  }, []);

  useEffect(() => {
    if(data && q){
      if (JSON.stringify(data) !== JSON.stringify(q.getContents())){
        q.setContents(JSON.parse(JSON.stringify(data)))
      }
    }
  }, [data]);

  return <div className={"min-h-20 w-full"}>
    <div ref={editorRef} className="bg-white w-full min-h-80 rounded-b-lg !border-pink" />
  </div>;
};

export default observer(ArticleEditor);