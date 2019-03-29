var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { GreenstarService } from '../service/greenstar.service';
var GreenstarComponent = /** @class */ (function () {
    function GreenstarComponent(greenStarApi) {
        this.greenStarApi = greenStarApi;
        this.MyArrayType = [];
        //this.slno=this.serialno;
    }
    GreenstarComponent.prototype.loadStarData = function () {
        var _this = this;
        //alert(this.serialno);
        // alert(this.paramID);
        this.slno = this.serialno;
        this.lblText = this.labelText;
        //this.labelText="Decipline";
        this.greenStarApi.getGrrenStar(this.paramID, 1).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var entry = data_1[_i];
                var el = document.getElementById(_this.slno + '_day' + entry.day);
                el.setAttribute('fill', entry.colorHexCode);
                //console.log(entry); // 1, "string", false
            }
        });
    };
    // loadStarData() {
    //   this.MyArrayType = [
    //     { day: 1, color: '#FF0000' },
    //     { day: 2, color: '#32CD32' },
    //     { day: 3, color: '#FF0000' },
    //     { day: 4, color: '#32CD32' },
    //     { day: 5, color: '#FF0000' },
    //     { day: 6, color: '#32CD32' },
    //     { day: 7, color: '#FF0000' },
    //     { day: 8, color: '#32CD32' },
    //     { day: 9, color: '#FF0000' },
    //     { day: 10, color: '#32CD32' },
    //     { day: 11, color: '#FF0000' },
    //     { day: 12, color: '#32CD32' },
    //     { day: 13, color: '#FF0000' },
    //     { day: 14, color: '#32CD32' },
    //     { day: 15, color: '#FF0000' },
    //     { day: 16, color: '#32CD32' },
    //     { day: 17, color: '#FF0000' },
    //     { day: 18, color: '#32CD32' },
    //     { day: 19, color: '#FF0000' },
    //     { day: 20, color: '#32CD32' },
    //     { day: 21, color: '#FF0000' },
    //     { day: 22, color: '#32CD32' },
    //     { day: 23, color: '#FF0000' },
    //     { day: 24, color: '#32CD32' },
    //     { day: 25, color: '#FF0000' },
    //     { day: 26, color: '#32CD32' },
    //     { day: 27, color: '#FF0000' },
    //     { day: 28, color: '#32CD32' },
    //     { day: 29, color: '#FF0000' },
    //     { day: 30, color: '#32CD32' },
    //     { day: 31, color: '#32CD32' },
    //   ];
    // }
    GreenstarComponent.prototype.fillStar = function () {
        for (var _i = 0, _a = this.MyArrayType; _i < _a.length; _i++) {
            var entry = _a[_i];
            var el = document.getElementById('day' + entry.day);
            el.setAttribute('fill', entry.colorHexCode);
            //console.log(entry); // 1, "string", false
        }
    };
    GreenstarComponent.prototype.ngOnInit = function () {
        console.log(this.strokeColor);
        this.loadStarData();
        ///this.fillStar();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GreenstarComponent.prototype, "strokeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GreenstarComponent.prototype, "paramID", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GreenstarComponent.prototype, "serialno", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GreenstarComponent.prototype, "labelText", void 0);
    GreenstarComponent = __decorate([
        Component({
            selector: 'app-greenstar',
            templateUrl: './greenstar.component.html',
            styleUrls: ['./greenstar.component.scss']
        }),
        __metadata("design:paramtypes", [GreenstarService])
    ], GreenstarComponent);
    return GreenstarComponent;
}());
export { GreenstarComponent };
//# sourceMappingURL=greenstar.component.js.map