import { $ } from "../base";
console.log("modal.ts imported");

$.modal = (options: any) => {

    const $modal = _createModal(options);

    const open = () => {
        $modal.classList.add("open");
    };
    const close = () => {
        $modal.classList.remove("open");
    }
    const destroy = () => {};

    _closeHandler(close);

    return {
        open,
        close,
        destroy,
    };
};

function _createModal(options: any): any {
    const modal: HTMLElement = document.createElement("div");

    modal.classList.add("vmodal");
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">
                        modal
                    </span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                    <button class="submit btn-success">Ok</button>
                    <button class="cancel btn-primary">Cancel</button>
                </div>
            </div>
        </div>
    `);

    document.body.appendChild(modal);

    return modal;
};

function _closeHandler(closeCallback: ()=>void) {
    document.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if(target.classList.contains("modal-overlay")) {
            closeCallback();
        }
    })
};