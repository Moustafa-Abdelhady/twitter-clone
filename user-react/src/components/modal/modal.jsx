import React, {ButtonHTMLAttributes, MouseEventHandler} from "react";
import "./modal.scss"

const contentContainerStyle = {
    // maxHeight: '100%',
    // minHeight: 430,
    width: 600,
    // height: 650,
    maxWidth: "100%",
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)'
}

/**
 * @param {string} id use for set modal id
 * @param {string} modalStyle use for set class name for modal
 * @returns {TwModal, TwModal.Body, TwModal.Header, TwModal.Footer, TwModal.ModalButton}
 * */
class TwModal extends React.Component {

    _label: string = (id) => `${id}Label`;

    /**
     *
     * @return React.Component
     * @param props
     * */
    static Header(props: {
        title?: string,
        children?: React.Component | React.Component[],
        defaultBtn?: boolean,
        defaultHeader?: boolean,
        classes?: string,
        label?: string
    }) {
        function DefaultBtn() {
            return (
                <button
                    type={"button"}
                    className={"btn-close ms-0 rounded-5"}
                    data-bs-dismiss={"modal"}
                    aria-label={"Close"}
                ></button>
            );
        }

        function DefaultHeader() {
            return (
                <div className="row row-cols-2 w-100 mt-2 justify-content-evenly align-items-center">
                    <div className="w-50 text-align-start text-dark">
                        <div className={" rounded-pill tw-modal-close-button"}>
                            <i
                                style={{WebkitTextStroke: 1}}
                                role={"button"}
                                className={"bi bi-x mx-0 text-dark fs-3"}
                                data-bs-dismiss={"modal"}
                                aria-label={"Close"}
                            ></i>
                        </div>
                    </div>
                    <i className={"bi bi-twitter fs-2"}></i>
                </div>
            );
        }

        return (
            <div className={"modal-header border-0 pt-0"} style={{height: 53}}>
                {props?.defaultHeader ? <DefaultHeader/> : (
                    props?.children ?? (
                        <div className={"row w-100 h-100 g-0 justify-content-center align-items-center"}>
                            <div className={"col-4"}>
                                {props?.defaultBtn ? <DefaultBtn/> : false}
                            </div>
                            <div className={"col"}>

                                <h1 className={`modal-title ${props?.classes ?? "fs-5"}`}
                                    id={`${props?.label}Label`}>{props.title}</h1>
                            </div>
                            <div className={"col-4"}></div>
                        </div>
                    )
                )}
            </div>
        );
    }

    /**
     * @param {React.Component} children use to set Component in Footer body
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @return React.Component
     * */
    static Footer({children, classes}) {
        return (
            <div className={`modal-footer ${classes ?? null}`}>
                {children}
            </div>
        );
    }

    /**
     * @param {React.Component} children use to set Component in body
     * @param {React.HTMLAttributes.className} classes set custom class for header element
     * @return React.Component
     * */
    static Body({children, classes}) {
        return (
            <div className={`modal-body ${classes ?? null}`}>
                {children}
            </div>
        );
    }

    /**
     * @return React.Component
     * @param props
     * */
    static ModalButton(
        props: {
            targetId: string,
            btnStyle?: string,
            withOutButton?: boolean,
            classes?: string,
            title?: string,
            children?: React.ReactElement,
            other?: MouseEventHandler | ButtonHTMLAttributes
        }
    ) {
        const elementRole = {
            type: "button",
            className: `btn btn-${props.btnStyle ?? "primary"} ${props.classes ?? ""}`,
            "data-bs-toggle": "modal",
            "data-bs-target": `#${props.targetId}`,
        }
        return (
            <>
                {!props?.withOutButton
                    ? (
                        <button
                            {...elementRole}
                            {...props.other}
                        >
                            {props.title ? props.title : props.children ? props.children : "Tw Model"}
                        </button>
                    ) : (
                        <span  {...elementRole} className={""}>{props?.children}</span>
                    )
                }

            </>
        );
    }

    render() {
        return (

            <div
                className={"modal fade"}
                id={this.props.id}
                tabIndex="-1"
                aria-labelledby={this._label(this.props.id)}
                aria-hidden="true"
            >
                <div className={`modal-dialog ${this.props?.modalStyle}`}>
                    <div className={"modal-content tw-modal-content tw-modal-centred tw-modal-fixed"}>
                        {this.props.children.length ? this.getMap() : this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    getMap() {
        return this.props.children.map(child => child.type !== TwModal.ModalButton ? child : false);
    }
}

export default TwModal;
