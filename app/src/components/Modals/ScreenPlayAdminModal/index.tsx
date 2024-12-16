import { Controller } from "react-hook-form";
import { useScreenPlayAdminModal } from "../../../controllers/useScreenPlayAdminModal";
import { ScreenPlayStatus } from "../../../models/TrailModel";
import { Dialog, DialogProps } from "../../Dialog";
import { Input } from "../../Input";
import { StatusRow } from "../../Status/StatusRow";
import { ClientInfoView, FitButton, ScreenPlayAdminModalView, ScreenPlayView, ChangeStatusView, StatusView } from "./styles";
import { Button } from "../../Buttons/Button";
import { UserRole } from "../../../models/UserModel";
import { getApprovalButtonText, getSendButtonText } from "../../../ultils/statusColorAndText";

export interface ScreenPlayAdminModalProps extends Omit<DialogProps, "children"> {
  screenPlayId: string;
};

export const ScreenPlayAdminModal: React.FC<ScreenPlayAdminModalProps> = ({
  open,
  screenPlayId,
  ...rest
}) => {
  const {
    user,
    form,
    screenPlay,
    lastTrailItem,
    handleSubmit,
  } = useScreenPlayAdminModal( screenPlayId );

  return (
    <Dialog
      open={ open }
      { ...rest }
    >
      <ScreenPlayAdminModalView
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{ duration: .4 }}
      >
        {
          screenPlay && (
            <>
              <div>
                <h2>Roteiro</h2>

                <h4>{ screenPlay.title }</h4>

                <ScreenPlayView>
                  <pre>{ screenPlay.content }</pre>
                </ScreenPlayView>
              </div>

              <div className="status-column">
                <div>
                  <h3>Status</h3>

                  <ClientInfoView>
                    <strong>{ screenPlay.client.name }</strong>

                    <span>{ screenPlay.client.email }</span>

                    <span>{ screenPlay.client.phone }</span>
                  </ClientInfoView>
                </div>

                {
                  user?.role === UserRole.ANALYST && (lastTrailItem?.status === ScreenPlayStatus.AWAITING_ANALYSIS || lastTrailItem?.status === ScreenPlayStatus.UNDER_ANALYSIS) ||
                  user?.role === UserRole.REVIEWER && (lastTrailItem?.status === ScreenPlayStatus.AWAITING_REVIEW || lastTrailItem?.status === ScreenPlayStatus.UNDER_REVIEW) ||
                  (user?.role === UserRole.APPROVER && (lastTrailItem?.status === ScreenPlayStatus.AWAITING_APPROVAL || lastTrailItem?.status === ScreenPlayStatus.UNDER_APPROVAL))
                    ? (
                        <>
                          <StatusView>
                            {
                              lastTrailItem
                                ? (
                                    <StatusRow
                                      trail={ lastTrailItem }
                                      isFirst={ true }
                                    />
                                  )
                                : (<></>)
                            }
                          </StatusView>
                          <ChangeStatusView>
                            <form onSubmit={ handleSubmit }>
                              {
                                lastTrailItem?.status === ScreenPlayStatus.UNDER_ANALYSIS ||
                                lastTrailItem?.status === ScreenPlayStatus.UNDER_REVIEW
                                  ? (
                                      <Input>
                                        <textarea
                                          placeholder={ lastTrailItem?.status === ScreenPlayStatus.UNDER_ANALYSIS ? "Justificativa" : "Revisão e/ou ideias"}
                                          autoComplete="off"
                                          rows={ 16 }
                                          { ...form.register("justification")}
                                        />

                                        <span>{ form.formState.errors.justification?.message ?? ""}</span>
                                      </Input>
                                    )
                                  : (<></>)
                              }

                              {
                                lastTrailItem.status === ScreenPlayStatus.UNDER_ANALYSIS ||
                                lastTrailItem.status === ScreenPlayStatus.AWAITING_APPROVAL ||
                                lastTrailItem.status === ScreenPlayStatus.UNDER_APPROVAL
                                  ? (
                                      <Controller
                                        control={ form.control }
                                        name="fit"
                                        render={({ field: { value, onChange }}) => (
                                          <FitButton
                                            $fit={ value }
                                          >
                                            <button
                                              type="button"
                                              onClick={() => onChange( true )}
                                            >
                                              <span>{ getApprovalButtonText( lastTrailItem.status )}</span>
                                            </button>

                                            <button
                                              type="button"
                                              onClick={() => onChange( false )}
                                            >
                                              <span>REJEITAR</span>
                                            </button>
                                          </FitButton>
                                        )}
                                      />
                                    )
                                  : (<></>)
                              }

                              <Button
                                type="submit"
                              >
                                { getSendButtonText( lastTrailItem.status )}
                              </Button>
                            </form>
                          </ChangeStatusView>
                        </>
                      )
                    : (
                        <StatusView>
                          {
                            screenPlay?.trail.map(( trailItem, index ) => (
                              <StatusRow
                                key={ trailItem.id }
                                trail={ trailItem }
                                isFirst={ index === 0 }
                              />
                            ))
                          }
                        </StatusView>
                      )
                }
              </div>
            </>
          )
        }
      </ScreenPlayAdminModalView>
    </Dialog>
  );
};
