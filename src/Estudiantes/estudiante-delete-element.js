import { LitElement, html } from 'lit-element';
import estudianteStyle from "./Styles/estudianteStyle";

export class EstudianteDeleteElement extends LitElement {

    static get styles(){
        return[estudianteStyle]
    };
    
    render() {
        return html`
        <style>
            @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        </style>
            
            
            
        `;
    }
}
customElements.define('estudiante-delete-element', EstudianteDeleteElement);