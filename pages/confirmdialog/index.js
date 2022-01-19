import React, { Component } from 'react';
import { ConfirmDialog, confirmDialog } from '../../components/lib/confirmdialog/ConfirmDialog';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import { ConfirmDialogDoc } from '../../components/doc/confirmdialog';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class ConfirmDialogDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
        this.confirmPosition = this.confirmPosition.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1() {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2() {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirmPosition(position) {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Confirmation Dialog Component</title>
                    <meta name="description" content="ConfirmDialog uses a Dialog UI with confirmDialog method or ConfirmDialog tag" />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>ConfirmDialog</h1>
                        <p>ConfirmDialog uses a Dialog UI with <b>confirmDialog</b> method or <b>&lt;ConfirmDialog&gt;</b> tag.</p>
                    </div>
                    <DocActions github="confirmdialog/index.js" />
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Basic</h5>
                        <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                        <Button onClick={this.confirm2} icon="pi pi-times" label="Delete"></Button>

                        <h5>Position</h5>
                        <div className="grid">
                            <div className="col-12">
                                <Button onClick={() => this.confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                            </div>
                            <div className="col-12">
                                <Button onClick={() => this.confirmPosition('top-left')} icon="pi pi-arrow-down" label="TopLeft" className="p-button-warning mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('top-right')} icon="pi pi-arrow-down" label="TopRight" className="p-button-warning"></Button>
                            </div>
                            <div className="col-12">
                                <Button onClick={() => this.confirmPosition('bottom-left')} icon="pi pi-arrow-up" label="BottomLeft" className="p-button-success mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                                <Button onClick={() => this.confirmPosition('bottom-right')} icon="pi pi-arrow-up" label="BottomRight" className="p-button-success"></Button>
                            </div>
                        </div>

                        <h5>Using ConfirmDialog tag</h5>
                        <ConfirmDialog visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                            header="Confirmation" icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject} />
                        <Button onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
                    </div>
                </div>

                <ConfirmDialogDoc />
            </div>
        )
    }
}
