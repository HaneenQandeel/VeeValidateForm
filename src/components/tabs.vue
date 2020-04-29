<template>
  <div class="container">
    <div class="form-data" dir="rtl">
      <div class="line"></div>
      <h3><i class="lar la-address-book"></i>إنشاء زبون جديد</h3>
      <b-tabs content-class="mt-3" style="margin-top:100px;">
        <b-tab title="البيانات الشخصية" active >
          <div>
          <b-card>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                    <ValidationProvider
                  name="name"
                  rules="required|alpha_spaces"
                  v-slot="{ errors }"
                > 
                  <div class="row">
                    <div class="col-sm-2">
                      <label style="margin-top: 37px;">الإسم</label>
                    </div>
                    <div class="col-sm-7">
                      <input @input="onChang()" class="form-control" v-model="name" type="text" />
                      <span class="errors">{{ errors[0] }}</span>
                    </div>
                    <div class="col-3">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select
                          name="language"
                          style="margin-top:30px;margin-right: -180px;"
                          @click="onChang()"
                          v-model="name.selectLang"
                          class="browser-default custom-select"
                        >
                          <option selected disabled>اللغة</option>
                          <option value="ar">العربية</option>
                          <option value="en">الانجليزية</option>

                        </select>
                        <span class="errors" style="color:red;">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  
                </ValidationProvider>


                <ValidationProvider
                  name="type"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                 <div class="row">
                    <div class="col-sm-2">
                        <label style="margin-top: 37px;">النوع</label>
                    </div>
                  <div class="col-sm-10">
                    <select @click="onChang()" v-model="selected" class="browser-default custom-select" style="margin-top: 30px;">
                      <option disabled value="">Please select one</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                  </select>
                  </div>
                  </div>
                  
                  <span class="errors">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="code"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="row">
                    <div class="col-sm-2">
                       <label style="margin-top: 37px;">الكود</label>
                    </div>
                    <div class="col-sm-10">
                       <input @input="onChang()" class="form-control" v-model="code" type="text" />
                  <span class="errors">{{ errors[0] }}</span>
                    </div>
                  </div>
                 
                </ValidationProvider>

                <ValidationProvider
                  name="tax"
                  rules="required|numeric"
                  v-slot="{ errors }"
                >
                 <div class="row">
                    <div class="col-sm-2">
                     <label style="margin-top: 37px;">الرقم الضريبي</label>
                     </div>
                     <div class="col-sm-10">
                     <input v-validate="'between:1,11'"  class="form-control" v-model="tax" type="text" />
                  <span class="errors">{{ errors[0] }}</span>
                     </div>
                 
                 </div>
                  
                </ValidationProvider>
                <ValidationProvider
                  name="Salesperson"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="row">
                    <div class="col-sm-2">
                      <label style="margin-top: 37px;">مندوب المبيعات</label>
                    </div>
                    <div class="col-sm-10">
                       <input class="form-control" v-model="salesperson" type="text" />
                  <span class="errors">{{ errors[0] }}</span>
                    </div>
                  
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  name="currency"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="row currency">
                    <div class="col-sm-2">
                      <label style="margin-top: 37px;">العملة الإفتراضية</label>
                    </div>
                    <div class="col-sm-10">
                      <select v-model="currency" @click="onChang()" class="browser-default custom-select" style="margin-top: 30px;">
                        <option disabled value="">UAE Dirham</option>
                        <option>UAE Dirham</option>
                        <option>USD</option>
                        <option>Dinar</option>
                      </select>
                      <span class="errors">{{ errors[0] }}</span>
                    </div>
                    
                  </div>
                  
                </ValidationProvider>

                <ValidationProvider
                  name="gender"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="row gender">
                    <div class="col-sm-2">
                      <label style="margin-top:37px;">الجنس</label>
                    </div>
                    <div class="col-sm-10">
                      <select v-model="gender" class="browser-default custom-select" style="margin-top: 30px;">
                        <option disabled value="">Please select one</option>
                        <option>ذكر</option>
                        <option>أنثى</option>
                      </select>
                      <span class="errors">{{ errors[0] }}</span>
                    </div>
                  </div>
                </ValidationProvider>

                 <ValidationProvider
                  name="date"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <div class="row date">
                    <div class="col-sm-2">
                      <label style="margin-top:37px;">تاريخ البداية</label>
                    </div>
                    <div class="col-sm-10">
                      <DatePicker :mode='mode' v-model="selectedDate" style="margin-top: 30px;"></DatePicker>
                    </div>
                    
                  </div>
                  <span class="errors">{{ errors[0] }}</span>
                </ValidationProvider>

                 <div class="row submit">
                    <div class="col-sm-3">
                        <button type="reset" style="background-color:#000;" >إعادة تعيين</button>
                    </div>

                    <div class="col-sm-3">
                       <button type="submit" :disabled="invalid" style="margin-right: 26px;">إرسال</button>
                    </div>
                    <div class="col-sm-6"></div>

                    
                

                 </div>
              </form>
            </ValidationObserver>
            </b-card>
          </div>
        </b-tab>
        <b-tab title="بيانات الإتصال" disabled><p>بيانات الإتصال</p></b-tab>
        <b-tab title="البيانات المالية" disabled><p>البيانات المالية</p></b-tab>
        <b-tab title="بيانات العنوان" disabled><p>البيانات المالية</p></b-tab>
      </b-tabs>
    </div>
  </div>

</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import { extend } from "vee-validate";
import { required,numeric } from "vee-validate/dist/rules";
export default {
  components:{
    DatePicker
  },
  data: () => ({
    email: "",
    name: "",
    selected: "",
    code: "",
    tax: "",
    salesperson: "",
    currency: "",
    gender: "",
    selectedDate:"",
    mode:'single'
  }),
  methods: {
    onSubmit() {
      this.onChang();
     let myToast = this.$toasted.show("Holla !!");
     myToast.text("Changing the text !!!").goAway(1500);
    },
    onChang() {
      extend("required", {
        ...required,
        message: "* يرجى إدخال الحقل مطلوب !! "
      });
      extend("numeric", {
        ...numeric,
        message: "* يرجى إدخال أرقام فقط !! "
      });
    }

  },
};
</script>

<style scoped>
span {
  display: block;
}

button {
  background-color: blue;
  border: none;
  color: #fff;
  border-radius: 5px;
  float: right;
    width: 100px;
    height: 40px;
    margin: 30px 184px;
}
input {
  width: 500px;
  height: 40px;
  margin-top:30px;
}

h3{
    float:right;
     border-bottom:1px solid #eee;
    margin-top: -66px;
}
.nav-link{
  color:blue;
  font-size:20px;
}
span.errors{
  color:red;
  float:right
}

</style>
