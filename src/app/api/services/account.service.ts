/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TradeCardsModelsAccountLoginResponse } from '../models/trade-cards-models-account-login-response';
import { TradeCardsModelsAccountLoginGuestTerminalRequest } from '../models/trade-cards-models-account-login-guest-terminal-request';
import { TradeCardsModelsAccountLoginRequest } from '../models/trade-cards-models-account-login-request';
import { TradeCardsModelsAccountConfirmCustomerEmailRequest } from '../models/trade-cards-models-account-confirm-customer-email-request';
import { TradeCardsModelsAccountForgotPasswordRequest } from '../models/trade-cards-models-account-forgot-password-request';
import { TradeCardsModelsAccountResetPasswordRequest } from '../models/trade-cards-models-account-reset-password-request';
import { TradeCardsModelsAccountCurrentUserResponse } from '../models/trade-cards-models-account-current-user-response';
import { TradeCardsModelsAccountIsEmailFreeResponse } from '../models/trade-cards-models-account-is-email-free-response';
import { TradeCardsModelsAccountLoginVKRequest } from '../models/trade-cards-models-account-login-vkrequest';
import { TradeCardsModelsAccountLoginFBRequest } from '../models/trade-cards-models-account-login-fbrequest';
import { TradeCardsModelsAccountLoginGoogleRequest } from '../models/trade-cards-models-account-login-google-request';
import { TradeCardsModelsAccountLoginOKRequest } from '../models/trade-cards-models-account-login-okrequest';
@Injectable({
  providedIn: 'root',
})
class AccountService extends __BaseService {
  static readonly guestLoginPath = '/api/account/guest-login';
  static readonly guestLoginTerminalPath = '/api/account/guest-login-terminal';
  static readonly loginPath = '/api/account/login';
  static readonly confirmEmailPath = '/api/account/confirmEmail';
  static readonly forgotPasswordPath = '/api/account/forgot_password';
  static readonly resetPasswordPath = '/api/account/reset_password';
  static readonly getCurrentUserInfoPath = '/api/account/current_user';
  static readonly getUserNamePath = '/api/account/{id}/get_user_name';
  static readonly isEmailFreePath = '/api/account/email/{email}/free';
  static readonly loginVKPath = '/api/account/loginVK';
  static readonly loginFBPath = '/api/account/loginFB';
  static readonly loginGooglePath = '/api/account/loginGoogle';
  static readonly loginOKPath = '/api/account/loginOK';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * ???????????????? ???????? ?? ??????????????
   * @return Success
   */
  guestLoginResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/guest-login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ???????????????? ???????? ?? ??????????????
   * @return Success
   */
  guestLogin(): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.guestLoginResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ???????????????? ???????? ?? ?????????????? ?????? ??????????????????
   * @param model undefined
   * @return Success
   */
  guestLoginTerminalResponse(model?: TradeCardsModelsAccountLoginGuestTerminalRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/guest-login-terminal`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ???????????????? ???????? ?? ?????????????? ?????? ??????????????????
   * @param model undefined
   * @return Success
   */
  guestLoginTerminal(model?: TradeCardsModelsAccountLoginGuestTerminalRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.guestLoginTerminalResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ???????? ?? ??????????????
   * @param model ???????????? ?????? ??????????
   * @return Success
   */
  loginResponse(model?: TradeCardsModelsAccountLoginRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ???????? ?? ??????????????
   * @param model ???????????? ?????? ??????????
   * @return Success
   */
  login(model?: TradeCardsModelsAccountLoginRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.loginResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ?????????????????????????? ?????????? ????????????????????
   * @param model ???????????? ?????? ??????????????????????????
   * @return Success
   */
  confirmEmailResponse(model?: TradeCardsModelsAccountConfirmCustomerEmailRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/confirmEmail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ?????????????????????????? ?????????? ????????????????????
   * @param model ???????????? ?????? ??????????????????????????
   * @return Success
   */
  confirmEmail(model?: TradeCardsModelsAccountConfirmCustomerEmailRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.confirmEmailResponse(model).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ???????????? ???? ???????????????????????????? ????????????
   * @param model ???????????? ?????? ????????????????????????????
   */
  forgotPasswordResponse(model?: TradeCardsModelsAccountForgotPasswordRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/forgot_password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * ???????????? ???? ???????????????????????????? ????????????
   * @param model ???????????? ?????? ????????????????????????????
   */
  forgotPassword(model?: TradeCardsModelsAccountForgotPasswordRequest): __Observable<null> {
    return this.forgotPasswordResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ?????????? ????????????
   * @param model ???????????? ?????? ???????????? ????????????
   */
  resetPasswordResponse(model?: TradeCardsModelsAccountResetPasswordRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = model;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/reset_password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * ?????????? ????????????
   * @param model ???????????? ?????? ???????????? ????????????
   */
  resetPassword(model?: TradeCardsModelsAccountResetPasswordRequest): __Observable<null> {
    return this.resetPasswordResponse(model).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ?????????????????? ???????????? ?????????????????????????????? ????????????????????????
   * @return Success
   */
  getCurrentUserInfoResponse(): __Observable<__StrictHttpResponse<TradeCardsModelsAccountCurrentUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/account/current_user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountCurrentUserResponse>;
      })
    );
  }
  /**
   * ?????????????????? ???????????? ?????????????????????????????? ????????????????????????
   * @return Success
   */
  getCurrentUserInfo(): __Observable<TradeCardsModelsAccountCurrentUserResponse> {
    return this.getCurrentUserInfoResponse().pipe(
      __map(_r => _r.body as TradeCardsModelsAccountCurrentUserResponse)
    );
  }

  /**
   * ?????????????????? ?????? ???????????????????????? ???? id ?????? ???????????????????????????? ????????????
   * @param id ?????????????????????????? ????????????????????????
   * @return Success
   */
  getUserNameResponse(id: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/account/${encodeURIComponent(id)}/get_user_name`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * ?????????????????? ?????? ???????????????????????? ???? id ?????? ???????????????????????????? ????????????
   * @param id ?????????????????????????? ????????????????????????
   * @return Success
   */
  getUserName(id: string): __Observable<string> {
    return this.getUserNameResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * ??????????????????, ???????????????? ???? ?????????????????? ??????????
   * @param email undefined
   * @return Success
   */
  isEmailFreeResponse(email: string): __Observable<__StrictHttpResponse<TradeCardsModelsAccountIsEmailFreeResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/account/email/${encodeURIComponent(email)}/free`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountIsEmailFreeResponse>;
      })
    );
  }
  /**
   * ??????????????????, ???????????????? ???? ?????????????????? ??????????
   * @param email undefined
   * @return Success
   */
  isEmailFree(email: string): __Observable<TradeCardsModelsAccountIsEmailFreeResponse> {
    return this.isEmailFreeResponse(email).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountIsEmailFreeResponse)
    );
  }

  /**
   * ???????? ?? ?????????????? ?????????? VK
   * @param request ???????????? ?????? ??????????
   * @return Success
   */
  loginVKResponse(request?: TradeCardsModelsAccountLoginVKRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/loginVK`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ???????? ?? ?????????????? ?????????? VK
   * @param request ???????????? ?????? ??????????
   * @return Success
   */
  loginVK(request?: TradeCardsModelsAccountLoginVKRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.loginVKResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }

  /**
   * ?????????????????? ?????????????????????? ?????????? ????. ?????????????? ???????????? ????????????????????????, ???????? ???? ?????? ???? ????????????
   * @param request undefined
   */
  loginFBResponse(request?: TradeCardsModelsAccountLoginFBRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/loginFB`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????????????? ?????????? ????. ?????????????? ???????????? ????????????????????????, ???????? ???? ?????? ???? ????????????
   * @param request undefined
   */
  loginFB(request?: TradeCardsModelsAccountLoginFBRequest): __Observable<null> {
    return this.loginFBResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ?????????????????? ?????????????????????? ?????????? ????????. ?????????????? ???????????? ????????????????????????, ???????? ???? ?????? ???? ????????????
   * @param request undefined
   */
  loginGoogleResponse(request?: TradeCardsModelsAccountLoginGoogleRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/loginGoogle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * ?????????????????? ?????????????????????? ?????????? ????????. ?????????????? ???????????? ????????????????????????, ???????? ???? ?????? ???? ????????????
   * @param request undefined
   */
  loginGoogle(request?: TradeCardsModelsAccountLoginGoogleRequest): __Observable<null> {
    return this.loginGoogleResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * ???????? ?? ?????????????? ?????????? OK
   * @param request ???????????? ?????? ??????????
   * @return Success
   */
  loginOKResponse(request?: TradeCardsModelsAccountLoginOKRequest): __Observable<__StrictHttpResponse<TradeCardsModelsAccountLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/loginOK`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TradeCardsModelsAccountLoginResponse>;
      })
    );
  }
  /**
   * ???????? ?? ?????????????? ?????????? OK
   * @param request ???????????? ?????? ??????????
   * @return Success
   */
  loginOK(request?: TradeCardsModelsAccountLoginOKRequest): __Observable<TradeCardsModelsAccountLoginResponse> {
    return this.loginOKResponse(request).pipe(
      __map(_r => _r.body as TradeCardsModelsAccountLoginResponse)
    );
  }
}

module AccountService {
}

export { AccountService }
